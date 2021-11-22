const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ollie.project.307@gmail.com",
    pass: "QNDS3077",
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.watchStories = functions.database.ref("/stories/{story}")
    .onWrite((change, context) => {
      const storyBefore = change.before.val();
      const storyAfter = change.after.val();
      const maillist = [];
      let htmlContent = "";

      if (change.before.exists() && change.after.exists()) { // update
        htmlContent = `<h1>Changes are displayed below:</h1>
          <p> <b>Category before: </b> ${storyBefore.category}
           &emsp; <b>Category after: </b> ${storyAfter.category} </p>
          <p> <b>description before: </b> ${storyBefore.description}
           &emsp; <b>description after: </b> ${storyAfter.description} </p>
           <p> <b>estimated time before: </b> ${storyBefore.estimated_time}
           &emsp; <b>estimated time after: </b> ${storyAfter.estimated_time}</p>
           <p> <b>name before: </b> ${storyBefore.name}
           &emsp; <b>name after: </b> ${storyAfter.name} </p>
           <p> <b>priority before: </b> ${storyBefore.priority}
           &emsp; <b>priority after: </b> ${storyAfter.priority} </p>`;
      } else if (!change.before.exists()) { // create
        return;
      } else if (change.before.exists() && !change.after.exists()) { // deleted
        htmlContent = `<h1>A story you were watching was deleted: </h1>
          <p> The story with name <b> ${storyBefore.name} </b> was deleted</p>`;
      }

      if (storyBefore.watch_list == undefined) {
        console.log("No one is watching this story");
        return;
      } else {
        for (const [key, value] of Object.entries(storyBefore.watch_list)) {
          console.log(`${key}: ${value}`);
          maillist.push(value);
        }
      }

      const mailOptions = {
        from: "ollie.project.307@gmail.com",
        to: maillist,
        subject: "Changes to your watched story",
        html: htmlContent,
      };

      return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent!");
      });
    });

exports.createStories = functions.database.ref("/stories/{story}")
    .onWrite((change, context) => {
      const storyAfter = change.after.val();
      let htmlContent = "";

      if (!change.before.exists()) { // create
        htmlContent = `<h1>The new story is displayed below:</h1>
          <p> <b>Name: </b> ${storyAfter.name} </p>
          <p> <b>Category: </b> ${storyAfter.category} </p>
          <p> <b>Description: </b> ${storyAfter.description} </p>
           <p> <b>Estimated Time: </b> ${storyAfter.estimated_time}</p>
           <p> <b>Priority: </b> ${storyAfter.priority} </p>`;
      } else if (change.before.exists()) { // update/delete
        return;
      }


      /* for (const [key, value] of Object.entries(storyAfter.user)) {
          console.log(`${key}: ${value}`);
          maillist.push(value);
        }*/

      const mailOptions = {
        from: "ollie.project.307@gmail.com",
        to: "ollie.project.307@gmail.com",
        subject: "New Story Created",
        html: htmlContent,
      };

      return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Sent!");
      });
    });
