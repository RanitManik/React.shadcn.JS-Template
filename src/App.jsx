import { Code } from "./components/block/Code.jsx";
import { H1 } from "./components/block/H1.jsx";
import { H2 } from "./components/block/H2.jsx";

function App() {
  return (
    <div className="m-auto max-w-[1000px] p-6 md:p-8">
      <H1>
        <a
          className="font-medium text-blue-500"
          href="https://github.com/RanitManik/React.shadcn.JS-Template"
        >
          Frontend App Template
        </a>
      </H1>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Welcome to the{" "}
        <strong>React.shadcn.JS-Template</strong> This
        template is a robust starting point for building modern web applications
        using Vite and React with ShadcnUI, a design system for creating
        beautiful and consistent UIs.
      </p>

      <H2>Getting Started</H2>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        To get started with the template, follow these steps:
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            Clone the repository:{" "}
            <Code>
              git clone
              https://github.com/RanitManik/React.shadcn.JS-Template.git
            </Code>
          </li>
          <li>
            Navigate into the project directory:{" "}
            <Code>cd React.shadcn.JS-Template</Code>
          </li>
          <li>
            Install dependencies: <Code>npm install</Code> or{" "}
            <Code>yarn install</Code>
          </li>
          <li>
            Start the development server: <Code>npm run dev</Code> or{" "}
            <Code>yarn dev</Code>
          </li>
          <li>
            Open your browser and go to{" "}
            <a
              href="http://localhost:5173"
              className="font-medium text-primary underline underline-offset-4"
            >
              http://localhost:5173
            </a>
          </li>
        </ol>
      </p>

      <H2>Project Structure</H2>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        The project structure is organized as follows:
        <table className="my-6 w-full overflow-y-auto">
          <thead>
            <tr className="m-0 border-t bg-muted p-0">
              <th className="border px-4 py-2 text-left font-bold">File</th>
              <th className="border px-4 py-2 text-left font-bold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">components.json</td>
              <td className="border px-4 py-2 text-left">Component metadata</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">components/</td>
              <td className="border px-4 py-2 text-left">
                Reusable UI components
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">index.html</td>
              <td className="border px-4 py-2 text-left">HTML template</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">LICENSE</td>
              <td className="border px-4 py-2 text-left">
                License information
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">package.json</td>
              <td className="border px-4 py-2 text-left">
                Project dependencies and scripts
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">postcss.config.js</td>
              <td className="border px-4 py-2 text-left">
                PostCSS configuration
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">public/</td>
              <td className="border px-4 py-2 text-left">Static assets</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">README.md</td>
              <td className="border px-4 py-2 text-left">
                Project documentation
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">src/</td>
              <td className="border px-4 py-2 text-left">Main source code</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">tailwind.config.js</td>
              <td className="border px-4 py-2 text-left">
                Tailwind CSS configuration
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">tsconfig.json</td>
              <td className="border px-4 py-2 text-left">
                TypeScript configuration
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted/40">
              <td className="border px-4 py-2 text-left">vite.config.js</td>
              <td className="border px-4 py-2 text-left">
                Vite configuration file
              </td>
            </tr>
          </tbody>
        </table>
      </p>

      <H2>Contributing</H2>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Contributions are welcome! If you have suggestions or improvements,
        please fork the repository and submit a pull request. For more details,
        refer to the{" "}
        <a
          href="https://github.com/RanitManik/React.shadcn.JS-Template/issues"
          className="font-medium text-primary underline underline-offset-4"
        >
          issues
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/RanitManik/React.shadcn.JS-Template/pulls"
          className="font-medium text-primary underline underline-offset-4"
        >
          pull requests
        </a>{" "}
        on GitHub.
      </p>

      <H2>Contact</H2>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        For any questions or feedback, please reach out to us at{" "}
        <a
          href="mailto:ranitmanik.dev@gmail.com"
          className="font-medium text-primary underline underline-offset-4"
        >
          ranitmanik.dev@gmail.com
        </a>
        .
      </p>

      <H2>Acknowledgments</H2>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        Special thanks to the open-source community for their contributions that
        made this project possible.
      </p>
    </div>
  );
}

export default App;
