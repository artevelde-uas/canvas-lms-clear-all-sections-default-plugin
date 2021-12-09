import { router, dom } from '@artevelde-uas/canvas-lms-app';


export default function () {

    router.addListener(['courses.announcements.new', 'courses.discussions.new'], params => {
        dom.onElementAdded('input[type="hidden"][name="specific_sections"]', specificSections => {
            let selector = '[name="specific_sections"] + span > label > span > span > span:first-child + span > span > span > span > button';
            let allSectionsButton = specificSections.parentElement.querySelector(selector);
            let discussionTitle = document.getElementById('discussion-title');

            if (allSectionsButton === null) return;

            // Click to delete the 'All sections' button under 'Post to'
            allSectionsButton.click();

            // Set focus back on title input
            discussionTitle.focus();
        });
    });

    router.addListener(['courses.assignments.new'], params => {
        dom.onElementAdded('ul.ic-tokens', tokenList => {
            let everyoneToken = tokenList.querySelector('li.ic-token:first-child');
            let assignmentName = document.getElementById('assignment_name');

            if (everyoneToken === null) return;

            // Click to delete the 'Everyone' token under 'Assign to'
            everyoneToken.querySelector('.ic-token-delete-button').click();

            // Set focus back on name input
            assignmentName.focus();
        });
    });

}
