import Form from "./form";
export default {
    title: "Paged/Authentication",
    component:Form,
};

export const SigninForm = () => (
    <Form signin={true}/>
)

export const SignupForm = () => (
    <Form/>
)