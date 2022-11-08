# Job Keeper Application

Some clarifications:

1. Rating component is sizing when it initially renders. So when change width using DevTools
   it can have some problems in small screens and it need to reload the page (when user can change screen width by rotating the phone it works fine);

2. When user clicks 'save to my list' job ID is saving to the list (using Redux) and then it can
   be shown (rendered, when Saved jobs component will be needed) by finding jobs in the entire list of all jobs using ID.

3. When user rates the job job ID and rating value is saving to the list (using Redux) and then it can
   be sent to the server to contribute to that rating value to the general change job rating.

## Project stack

Main project technology: JavaScript(React), HTML, CSS(BEM), React-router, Redux (Redux-toolkit, async Thunks)
