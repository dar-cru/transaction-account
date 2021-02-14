import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Button from "../../components/Button";
import InPageAlert from "../../components/InPageAlert/InPageAlert";
import InputField from "../../components/InputField";
import { RootState } from "../../redux/rootReducer";
import { login } from "../../slices/authenticationSlice";
import { LoginFormContainer } from "./StyledLoginForm";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector(
    (state: RootState) => state.authenticated
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(login(values.username, values.password));
        setSubmitting(false);
        resetForm();
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Please enter your username"),
        password: Yup.string().required("Please enter your password"),
      })}
    >
      {({ isSubmitting, isValid }: any) => (
        <Form>
          <LoginFormContainer>
            <InputField
              label="Username"
              name="username"
              id="username"
              as="input"
            />
            <InputField
              label="Password"
              name="password"
              id="password"
              as="input"
              type="password"
            />
            <div>
              <Button
                data-testid="addButton"
                type="submit"
                label="Login"
                disabled={isSubmitting || !isValid}
              />
            </div>
            {error && !isLoading && <InPageAlert type="error" message={error} />}
          </LoginFormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
