
export default function ({ router, dom }) {
    router.addListener(['courses.announcements.new', 'courses.discussions.new'], params => {

        dom.onElementAdded('input[type="hidden"][name="specific_sections"]', specificSections => {
            let selector = '[name="specific_sections"] + span > span > span > span:first-child + span > span > span > button';
            let allSectionsButton = specificSections.parentElement.querySelector(selector);
            let discussionTitle = document.getElementById('discussion-title');

            if (allSectionsButton === null) return;

            // Click to delete the 'All sections' button under 'Post to'
            allSectionsButton.click();

            // Set focus back on title input
            discussionTitle.focus();
        });

    });
}
