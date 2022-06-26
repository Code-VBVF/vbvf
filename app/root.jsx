import { Outlet } from "@remix-run/react";

export default function Root() {
  console.log("rendering the root");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Internet home of Verse by Verse Fellowship"
        />
        <title>Verse by Verse Fellowship</title>
        <script
          src="https://badger.vbvf.org/script.js"
          site="PYFFDTIM"
          defer
        ></script>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@400;600;800&family=Volkhov:wght@400;700&family=Work+Sans:wght@400;500;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {/* A little help for the Netlify bots if you're not using a SSG */}
        {/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="tel" name="phoneNumber" />
          <input type="email" name="email" />
          <input type="checkbox" name="contactOptions" />
          <input type="checkbox" name="contactOptions" />
          <textarea name="message"></textarea>
        </form>
        <form
          name="care-ministry-contact"
          netlify
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="fullName" />
          <input type="tel" name="phoneNumber" />
          <input type="email" name="email" />
          <input type="checkbox" name="contactOptions" />
          <input type="checkbox" name="haveReceivedPriorCounseling" />
          <input type="text" name="counselor" />
          <input type="checkbox" name="contactPermission" />
        </form> */}
        <div id="root">
          <Outlet />
        </div>
      </body>
    </html>
  );
}
