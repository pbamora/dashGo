import Head from "next/head";
import { Flex, Button, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//crio a tipagem dos dados do meu formulário
type SignInFormData = {
  email: string;
  password: string;
};

const signinFormSchema = yup.object().shape({
  email: yup.string().required("E-email obrigatório.").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(8, "A senha precisa ter pelo menos 8 caracteres.")
    .max(16, "A senha pode ter no máximo 16 caracteres."),
});

export default function SignIn() {
  //   //recebo a tipagem que criei logo a cima e passo para o meu useForm
  //   //desta forma quando eu usar o register
  //   //ele sabera quais campos devo receber no meu input
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signinFormSchema),
  });

  //tipamos a função com a tipagem vinda do react form hook
  //e no seu generico tambem passamos os tipos de dados que esta função vai receber
  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    event.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SignIn | DashGo</title>
      </Head>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={480}
          background="gray.800"
          padding="8"
          borderRadius="8"
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text
            fontSize={["2xl", "4xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            mb="6"
          >
            dashgo{" "}
            <Text color="pink.500" as="span">
              .
            </Text>
          </Text>

          <Stack spacing="5">
            <Input
              name="email"
              placeholder="E-mail"
              label="E-mail"
              type="email"
              error={formState.errors.email}
              {...register("email")}
            />

            <Input
              name="password"
              placeholder="senha"
              label="Senha"
              type="password"
              error={formState.errors.password}
              {...register("password")}
            />

            <Button
              type="submit"
              colorScheme="pink"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
