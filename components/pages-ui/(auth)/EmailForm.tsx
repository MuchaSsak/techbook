"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { UseMutationResult } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const formFields: {
  name: "email";
  label: string;
  type: string;
  className?: string;
}[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
];

const formSchema = z.object({
  email: z
    .string()
    .email("Please provide a valid email address.")
    .max(320, "Email must be at most 320 characters."),
});

type EmailFormProps = UseMutationResult<
  void,
  Error,
  {
    email: string;
  },
  unknown
>;

function EmailForm({ mutate, isPending, isError }: EmailFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isError) form.setFocus("email");
  }, [isError, form]);

  function onSubmitCapture() {
    for (const error of Object.entries(form.formState.errors)) {
      if (error[1]) toast.error(error[1].message);
    }
  }

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onSubmitCapture={onSubmitCapture}
        className="space-y-4 sm:w-[28rem]"
      >
        {formFields.map(({ name, label, type }) => (
          <FormField
            control={form.control}
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput
                    {...field}
                    type={type}
                    id={name}
                    label={label}
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          variant="secondary"
          className="w-full"
          disabled={isPending}
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}

export default EmailForm;
