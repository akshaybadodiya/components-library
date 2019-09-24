import { createStyles, smAndUp, mdAndUp, lgAndUp } from "../../styles/styles";

export const testTemplateStyles = createStyles({
  testTemplate: {
    margin: 0,
    width: "100%",
    padding: 8
  },
  testTemplate__gridItem: {
    border: "1px solid blue"
  }
});
export type TestTemplateClassKey = keyof typeof testTemplateStyles;
