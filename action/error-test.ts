"use server"

import { headers } from "next/headers"
import { NextResponse } from "next/server"
import * as Sentry from "@sentry/nextjs"

export async function ErrorTest() {
  await Sentry.withServerActionInstrumentation(
    "ErrorTest",
    {
      headers: headers(),
      recordResponse: true, // Optionally record the server action response
    },
    async () => {
      throw new Error("Error Test")
      return NextResponse.json({ data: "Testing Sentry Error..." })
    }
  )
}
