import { TextInput, Button, Group, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
type Props = {
  signin?: boolean;
};
function Form({ signin }: Props) {
  let initialValues = signin
    ? {
        email: "",
        password: "",
      }
    : {
        name: "",
        email: "",
        password: "",
      };
  const form = useForm({
    initialValues,
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length > 3
          ? null
          : "Please put a password Greater than 3 characters",
    },
  });

  return (
    <Box
      p={"xl"}
      sx={{
        maxWidth: 400,
        background: "white",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
      mx="auto"
    >
      <Text
        style={{ fontSize: "30px", textAlign: "center", marginBottom: "10px" }}
      >
        {signin ? "Signin to Your Account" : " Create an Account"}
      </Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        {!signin ? (
          <TextInput
            required
            label="Name"
            placeholder="Your Name"
            style={{ marginBottom: "10px" }}
            {...form.getInputProps("name")}
          />
        ) : null}
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          style={{ marginBottom: "10px" }}
          {...form.getInputProps("email")}
        />
        <TextInput
          required
          label="Password"
          placeholder="Put a Strong Password"
          style={{ marginBottom: "10px" }}
          {...form.getInputProps("password")}
        />
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <Text style={{ marginTop: 10, textAlign: "center" }}>
        {signin ? "Don't have an account? " : "Already have an Account? "}
        <Text component="span" variant="link">
          <Link href={`/Authentication/${!signin ? "signin" : "signup"}`}>
            {!signin?"Signin":"Signup"}
          </Link>
        </Text>
      </Text>
    </Box>
  );
}

export default Form;
