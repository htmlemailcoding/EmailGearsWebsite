        function displayDateMinusNDays() {
            // Get all <p> elements
            const paragraphs = document.querySelectorAll('p[id^="date-"]');
            
            paragraphs.forEach((p) => {
                // Get the number after "date-" in the id
                const days = parseInt(p.id.replace('date-', ''));

                // Get the current date and subtract 'days' from it
                const today = new Date();
                today.setDate(today.getDate() - days);

                // Format the date as "Month Day, Year" (e.g., March 4, 2025)
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = today.toLocaleDateString('en-US', options);

                // Set the text content of the paragraph
                p.textContent = formattedDate;
            });
        }

        // Call the function to update the paragraphs
        displayDateMinusNDays();