"use client"

import Button from "@/app/components/Button"
import Input from "@/app/components/inputs/Input"
import React, { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

type Props = {}

type Variant = "LOGIN" | "REGISTER"

const AuthForm = (props: Props) => {
  const [variant, setVariant] = useState<Variant>("LOGIN")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("LOGIN")
    } else {
      setVariant("REGISTER")
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // Axios register
    }

    if (variant === 'LOGIN') {
      // NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth Social SignIn
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' ? (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          ) : null}
          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div
                className="
                  w-full
                  border-t
                  border-gray-300
                "
              >
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
