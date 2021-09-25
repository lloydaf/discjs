import { Sign, State } from "../types";

export const calculate = (state: State): Record<Sign, number> => {
  const pages = state.pages
  const initialCount: Record<Sign, number> = {
    SQ: 0,
    STAR: 0,
    TRI: 0,
    Z: 0,
    N: 0
  }
  return initialCount
}