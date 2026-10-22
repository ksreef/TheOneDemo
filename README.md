# Computers Broken by Caden Politiski & Keanu Schlank

A clicker game about breaking computers

A minimal TypeScript/Vite browser project with Deno checks and GitHub Pages deployment.
Game link: ([text](https://ksreef.github.io/TheOneDemo/))
Commit History: [text](https://github.com/ksreef/TheOneDemo/commits/main/src)

## How to play

- Click the computer image to break computers. Currency is count, the amount of computers currently broken
- Spend your count on upgrades.
  - **Destructive Force:** each click breaks more computers.
  - **Computer Wreckage Machine (time):** the machine breaks computers more often.
  - **Computer Wreckage Machine (power):** the machine breaks more computers.
  - **Computer Interest Machine:** every 12 seconds you gain interest on your total.
- Each upgrade's cost doubles every time you buy it

## Credits

Caden Commit History:
[text](https://github.com/ksreef/TheOneDemo/commit/9d5b723570741266000416f3e5dd23c893079c57)
Commit to add a clickable button and counter that increases with each click
[text](https://github.com/ksreef/TheOneDemo/commit/1a533c615fe70bd9d28575bfe33e0f621a08dc43)
Commit to add the automatic growth over time
[text](https://github.com/ksreef/TheOneDemo/commit/32be39b91898400105c6e4d1d611bea633cb90d7)
Commit to add the upgrade which improves the power of each click
[text](https://github.com/ksreef/TheOneDemo/commit/bfe42cc982a8b5695567b3610493ff9cff2d66ba)
Commit to add upgrades to decrease the automatic increase interval and how much it goes up by each interval
[text](https://github.com/ksreef/TheOneDemo/commit/0cfd8d8841c865fc1581481b599081661c980851)
Commit to make the upgrades cost more each time they are purchased
[text](https://github.com/ksreef/TheOneDemo/commit/acec8ab9aef8189b8937c09f2c5f8cad1b781815)
Commit to add an extra upgrade that adds interest

Keanu Commit History:
[text] (https://github.com/ksreef/TheOneDemo/commit/2b12f641e53938911f2c13947573e7430ea8d723)
Commit to implement elapsed-time for automatic production instead of a repeating interval
[text] (https://github.com/ksreef/TheOneDemo/commit/019dd3310c7690638dc9b76c971454240fe37c2f)
Commit to add upgrade ownership tracking and display production rates / feedback
[text] (https://github.com/ksreef/TheOneDemo/commit/7d7443f7576bc2a6f9237aa2d158c51ad88868a3)
COmmit to make the title and theme 'Computers Broken', where the rest of the game became about breaking computers
[text] (https://github.com/ksreef/TheOneDemo/commit/4cc16f9edb466593f9816cec94763d09b345eb98)
Commit to update font, colors, and layout
[text] (https://github.com/ksreef/TheOneDemo/commit/9cd7b78c4013de38c5c16066198f9d6adb3bb4ba)
Commit to refactor upgrades into a shared purchase function
[text] (https://github.com/ksreef/TheOneDemo/commit/0c821d79d0e1a3a6aef24f10aa6a08e9cbe6a2c9)
Commit to push the new breaking computer picture into assets
[text] (https://github.com/ksreef/TheOneDemo/commit/505f6b0e61b85b32cbde0c8fedc3aa1a9dca65d1)
Commit to fix feedback not showing properly

Tooling adapted from the [CMPM 121 Fall 2026 S01 starter](https://github.com/ucsc-cmpm-121-f26/s01-starter/tree/8974888efb6537be82e8eb069db139ea885039da), which has no explicit repository license. No new license is assigned to that material. The D1 scaffold and original SVG were authored with OpenAI GPT-6 Astra assistance. Dependencies retain their respective licenses.
