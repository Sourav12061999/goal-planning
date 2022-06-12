import Form from "./form";
export default {
    title: "Paged/Authentication",
    component:Form,
};

const SigninForm = () => (
    <Form signin={true}/>
)

const SignupForm = () => (
    <Form/>
)