import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { addNewAccount } from "../../slices/accountsSlice";
import { Account, AccountStatus } from "../../types";
import { uuid } from "uuidv4";
import Button from "../../components/Button";
import { useState } from "react";
import InPageAlert from "../../components/InPageAlert/InPageAlert";

const alphaNumericRegex = /^[A-Za-z0-9]+(?: +[A-Za-z0-9]+)*$/;

const initialValues = {
  name: "",
  type: "",
};

const CreateAccountForm = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const { name, type } = values;
        const newAccount: Account = {
          // TODO: The account id, status and balance, should be set in the backend and then returned as a response
          // after a successful account creation. This is only a mock implementation due to time constraints.
          id: uuid(),
          status: AccountStatus.PENDING,
          balance: 0,
          name,
          type,
        };
        dispatch(addNewAccount(newAccount));
        setSubmitting(false);
        resetForm();
        setSuccessMessage("Successfully created an account!");
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Please enter an account name")
          .matches(
            alphaNumericRegex,
            "Please enter a name only containing letters, numbers, and spaces."
          ),
        type: Yup.string().required("Please enter the account type"),
      })}
    >
      {({ isSubmitting, isValid }: any) => (
        <Form className="addCustomerForm">
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              flexDirection: "column",
              width: "50%",
              margin: "0 auto",
            }}
          >
            <InputField
              label="Account Name"
              name="name"
              id="name"
              as="input"
              placeholder=""
            />
            <InputField
              label="Account Type"
              name="type"
              id="type"
              as="input"
              placeholder=""
            />
            <Button
              data-testid="addButton"
              type="submit"
              disabled={isSubmitting || !isValid}
              label="Create Account"
            />

            {successMessage && (
              <InPageAlert type="success" message={successMessage} />
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateAccountForm;
