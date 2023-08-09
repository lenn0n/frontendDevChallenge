import React from "react";

const DeployApps = () => {

  const FirebaseSteps = [
    {
      text: "Step 1. Install the Firebase CLI",
      code: "npm install -g firebase-tools"
    },
    {
      text: "Step 2. Sign into Firebase",
      code: "firebase login"
    },
    {
      text: "Step 3. Navigate into your project",
      code: "firebase init"
    },
    {
      text: "Step 4. Prepare your site",
      code: "npm run build"
    },
    {
      text: "Step 5. Deploy",
      code: "firebase deploy"
    }
  ]

  const SurgeSteps = [
    {
      text: "Step 1. Install the surge CLI",
      code: "npm install -g surge"
    },
    {
      text: "Step 2. Build your site",
      code: "npm run build"
    },
    {
      text: "Step 3. Deploy your site providing your Publish Directory",
      code: "surge public/"
    }
  ]

  const VercelSteps = [
    {
      text: "Step 1. Install the Vercel CLI",
      code: "npm i -g vercel"
    },
    {
      text: "Step 2. Deploy",
      code: "vercel"
    }
  ]

  const Step = ({ text, code }) => {
    return (
      <div className="mt-4">
        <p>{text}</p>
        <div className="code-block">{code}</div>
      </div>
    )
  }
  
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div>  
          <h1 className="text-info">Firebase</h1>
          <p>With <a className="text-info" href="https://firebase.google.com/docs/hosting">Firebase hosting</a>, 
          you can deploy web apps - both static and dynamic content by a single command.</p>
          { FirebaseSteps.map((data) => { return <Step text={data.text} code={data.code}/> }) }

          <h1 className="mt-5 text-danger">Netlify</h1>
          <p><a href="https://www.netlify.com/" className="me-2 text-danger">Netlify</a> 
          supports GitHub, GitLab, and Bitbucket, it will redeploy the site just by pushing the code without manually rebuild.</p>
          <p>Step 1. Login to Netlify and select New site from git</p>
          <p>Step 2. Choose your repository and configure settings with options:</p>
          <ul>
            <li>Branch to deploy, default <code>master</code></li>
            <li>Build Command, default <code>npm run build</code></li>
            <li><p>Publish directory, default <code>public</code>, 
            but it is usually <code>public, dist, build,...</code></p></li>
          </ul>
          <p>Step 3. Select Deploy site</p>

          <h1 className="mt-5 text-success">Render</h1>
          <p>With <a href="https://render.com/" className="me-2 text-success">Render</a> , 
          you can host static sites, backend APIs, databases, and all your other apps in one place.</p>
          <p>Step 1. Login to Render and create a new Web Service and give access to your repository</p>
          <p>Step 2. Enter your settings</p>
          <ul>
            <li><strong>Environment</strong>: <code >Static Site</code></li>
            <li><strong>Build Command</strong>: e.g <code>npm run build</code></li>
            <li><strong>Publish Directory</strong>: e.g <code>public, dist, build,...</code></li>
          </ul>

          <h1 className="mt-5 text-warning">Surge</h1>
          <p><a href="https://surge.sh/" className="me-2 text-warning">Surge</a>  
          is a cloud platform to publish static web for Front-End Developers.</p>
          { SurgeSteps.map((data) => { return <Step text={data.text} code={data.code}/> }) }

          <h1 className="mt-5 text-dark">Vercel</h1>
          <p><a href="https://vercel.com/" className="me-2 text-dark">Vercel</a>  
          is a cloud platform for websites and serverless APIs, free and easy to use</p>
          { VercelSteps.map((data) => { return <Step text={data.text} code={data.code}/> }) }
          
        </div>
      </div>
    </>
  )
}

export default DeployApps