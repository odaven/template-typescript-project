import { z } from "zod";

test("Just testing zod is working", () => {
  const result = z.number().safeParse(1);
  expect(result.success).toBe(true);

  const result2 = z.number().safeParse("1");
  expect(result2.success).toBe(false);
});
