import { setup } from "./_helpers.js";
import { expect, test } from "vitest";


setup();

test('animate inprogress', async ({ uno }) => {
  const classes = ['animate-inprogress'];

  const { css } = await uno.generate(classes);
  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .animate-inprogress{background-image:linear-gradient(135deg,rgba(0, 0, 0, 0.05) 25%,transparent 0,transparent 50%,rgba(0, 0, 0, 0.05) 0,rgba(0, 0, 0, 0.05) 75%,transparent 0,transparent) !important;animation: animate-inprogress 3s linear infinite;}@keyframes animate-inprogress {0% {background-position: 0 0;}to {background-position: 60px 0;}}"
  `);
});

