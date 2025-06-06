// Splash screen logic
      window.onload = function () {
        setTimeout(() => {
          document.getElementById("splash").style.opacity = "0";
          setTimeout(() => {
            document.getElementById("splash").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
            document.body.style.overflow = "auto";
          }, 500);
        }, 2500);
      };

      function panic() {
        window.open("https://classroom.google.com", "_blank");
        window.close();
      }

      function hideGame() {
        const docUrl = prompt("Paste your Google Doc link here (must start with https://docs.google.com):");

        if (docUrl && docUrl.startsWith("https://docs.google.com")) {
          const gameFrame = document.getElementById("gameFrame");
          const fakeScreen = document.getElementById("fakeScreen");

          // Create a new iframe for the Google Doc
          const docFrame = document.createElement("iframe");
          docFrame.id = "docFrame";
          docFrame.src = docUrl;
          docFrame.style.width = "100%";
          docFrame.style.height = "100vh";
          docFrame.style.border = "none";

          // Hide game and fake screen, then insert doc iframe
          gameFrame.style.display = "none";
          fakeScreen.style.display = "none";

          // Remove any existing docFrame first
          const existingDoc = document.getElementById("docFrame");
          if (existingDoc) existingDoc.remove();

          document.body.appendChild(docFrame);
        } else {
          alert("That doesn't look like a valid Google Doc link.");
        }
      }

      function unhideGame() {
        document.getElementById("gameFrame").style.display = "block";
        document.getElementById("fakeScreen").style.display = "none";

        const docFrame = document.getElementById("docFrame");
        if (docFrame) docFrame.remove();
      }

      function toggleDarkMode() {
        document.body.classList.toggle("dark");
      }