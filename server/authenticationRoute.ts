import { Application, Response, Request } from "express";
import * as bodyParser from "body-parser";

const authenticateStatus = (body: any) => {
  const username = body.username ? body.username.toLowerCase() : "badrequest";

  switch (username) {
    case "badrequest":
      return 400;
    case "nikolat":
    case "alberte":
    case "thomase":
    case "marriec":
      return 200;
    default:
      return 401;
  }
};

export const authenticate = (body: any) => {
  const username = body.username ? body.username.toLowerCase() : "badrequest";

  switch (username) {
    case "badrequest":
      return {
        error:
          "There was an error while processing your request. Please try again later.",
      };
    case "nikolat":
    case "alberte":
    case "thomase":
    case "marriec":
      return {
        jwtToken: "authToken",
      };
    default:
      return {
        error:
          "Invalid username or password. Please try again.",
      };
  }
};

export const addAuthenticationRoute = (server: Application) => {
  server.use(bodyParser.json());

  server.post("/authenticate", (req: Request, res: Response) => {
    res.status(authenticateStatus(req.body)).json(authenticate(req.body));
  });
};
