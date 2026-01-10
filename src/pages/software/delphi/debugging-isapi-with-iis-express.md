---
layout: '@layouts/MarkdownPageLayout.astro'
date: 2017-01-29
title: Debugging ISAPI with IIS Express
---

IIS Express is a version of Microsoft IIS designed for developers. Microsoft provides an overview of it at [http://learn.iis.net/page.aspx/868/iis-express-overview/](http://learn.iis.net/page.aspx/868/iis-express-overview/). This page indicates that it works well with ASP.NET and PHP. It can also be used to debug ISAPI web applications.

The place to start learning about IIS Express is: [http://learn.iis.net/page.aspx/860/iis-express/](http://learn.iis.net/page.aspx/860/iis-express/). It doesn’t say much about using it with ISAPI applications. To start using it to debug ISAPI, follow the steps below:

- Download and install IIS Express 8. If you install the 64 bit version, both the 32 bit and 64 bit versions will be installed on your computer.
- To confirm your installation is successful, start a Command Prompt instance and change directory to the where the 32 bit version of IIS Express is installed (normally to <program files (x86)>\IIS Express). Then run the command “iisexpress”. Use your browser to display the web page [http://localhost:8080](http://localhost:8080).

With IIS Express, you can use the /config command line parameter to specify which applicationHost.config file to use. So we can create a specific applicationHost.config file for each ISAPI Web application project.

The easiest way to create a applicationHost.config file for your ISAPI project, is to copy the default one provided in the IIS Express installation and then modify it for your project. The default applicationHost.config file can be found in either <My Documents>\IISExpress\config\ or in <Program Files>\IIS Express\AppServer\

- Copy the default applicationHost.config file to your project directory.
- Make the following changes to the applicationHost.config file:
- Add a new Application Pool by adding the following line in the <applicationPools> node in the file

  ```
  <add name="IsapiDebugAppPool" autoStart="true" enable32BitAppOnWin64="true" managedRuntimeVersion="" managedPipelineMode="Integrated" />
  ```

- Add a new Application to the existing <site> (normally named Website1) node. This is done by adding the following lines after the existing application already defined for this site.

  ```
  <application path="/MyUrlPath" applicationPool="IsapiDebugAppPool">
    <virtualDirectory path="/" physicalPath="MyProjectFolder" />
  </application>
  ```

- Make sure that MyUrlPath is not the root of the website (as the existing application already specifies this).
- Change the Handlers Access Policy to allow execute. This is done by changing

  ```
  <handlers accessPolicy="Read, Script">
  to
  <handlers accessPolicy="Read, Execute, Script">
  ```

- Start a command prompt and start IIS Express with the following command line:

  ```
  iisexpress /config:<MyProjectFolder>\applicationHost.config
  ```

You should now be able to execute your ISAPI web application with a browser using port 8080.

- Finally, to debug your project, simply set iisexpress as your host application with the above command line. You can then debug your ISAPI web application as you would any other DLL. For example, in delphi, with Run | Parameters, set your Host Application to the (full path) of iisexpress.exe and set Parameters to:

  ```
  /config:<MyProjectFolder>\applicationHost.config
  ```

The above should get you up and running. However you should be aware that in some cases, you can only debug applications when your debugger is running with Administrative privileges. For example, by default, your debugger needs Administrative privileges if you are using the standard port 80 or 443.

[Scott Hanselman](http://www.hanselman.com/) has written an excellent article which describes how to set up your IIS Express installation so that you can debug on port 80 or 443 or even use SSL certificates without requiring Administrative privileges.

[http://www.hanselman.com/blog/WorkingWithSSLAtDevelopmentTimeIsEasierWithIISExpress.aspx](http://www.hanselman.com/blog/WorkingWithSSLAtDevelopmentTimeIsEasierWithIISExpress.aspx)

More information can be found at the [learn.iis.net IIS Express web pages](http://learn.iis.net/page.aspx/868/iis-express-overview/), however the above steps combined with the information in Scott’s article should be enough to enable you to effectively use IIS Express to debug your ISAPI Web applications.
