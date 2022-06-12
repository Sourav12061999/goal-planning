import { TextInput, Button, Group, Box , Text} from '@mantine/core';
import { useForm } from '@mantine/form';

function Form() {
  const form = useForm({
    initialValues: {
      name:'',
      email: '',
      password:'',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => value.length>3?null:"Please put a password Greater than 3 characters"
    },
  });

  return (
    <Box p={"xl"} sx={{ maxWidth: 400,background:"white",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} mx="auto">
      <Text style={{fontSize:"30px",textAlign:"center",marginBottom:"10px"}}>Create an Account</Text>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Name"
          placeholder="Your Name"
          style={{marginBottom:"10px"}}
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          style={{marginBottom:"10px"}}
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Password"
          placeholder="Put a Strong Password"
          style={{marginBottom:"10px"}}
          {...form.getInputProps('password')}
        />
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Form;