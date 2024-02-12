import { nanoid } from "@reduxjs/toolkit";

export default function ncNanoId(prefix = "redirect_tracer_") {
  return prefix + nanoid() + "_";
}
