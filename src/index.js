import { router, dom } from '@artevelde-uas/canvas-lms-app';

import __ from './i18n';


export default function () {

    router.onRoute(['courses.announcements.new', 'courses.discussions.new'], params => {
        dom.onElementAdded('input[type="hidden"][name="specific_sections"]', specificSections => {
            const selector = '[name="specific_sections"] + span > label > span > span > span:first-child + span > span > span > span > button';
            const allSectionsButton = specificSections.parentElement.querySelector(selector);
            const discussionTitle = document.getElementById('discussion-title');

            if (allSectionsButton === null) return;

            // Click to delete the 'All sections' button under 'Post to'
            allSectionsButton.click();

            // Set focus back on title input
            discussionTitle.focus();
        });
    });

    router.onRoute(['courses.assignments.new'], params => {
        dom.onElementAdded('ul.ic-tokens', tokenList => {
            const everyoneToken = tokenList.querySelector('li.ic-token:first-child');
            const assignmentName = document.getElementById('assignment_name');

            if (everyoneToken === null) return;

            // Click to delete the 'Everyone' token under 'Assign to'
            everyoneToken.querySelector('.ic-token-delete-button').click();

            // Set focus back on name input
            assignmentName.focus();
        });
    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
