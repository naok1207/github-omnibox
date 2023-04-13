/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ (function() {


// chrome.omnibox.onInputEntered.addListener((text) => {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
//   chrome.tabs.create({ url: newURL });
// });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 検索バーにデフォルトで表示される提案の設定
// chrome.omnibox.setDefaultSuggestion({ description: '...' })
const mofmof = [
    { url: 'https://github.com/mofmof/Uni-Coque', content: 'dev/mofmof/Uni-Coque', description: 'dev/mofmof/Uni-Coque' },
    { url: 'https://github.com/mofmof/OurTime', content: 'dev/mofmof/OurTime', description: 'dev/mofmof/OurTime' },
];
const dev = [
    { url: 'https://github.com/mofmof', content: 'dev/mofmof', description: 'dev/mofmof' },
    { url: 'https://github.com/naok1207', content: 'dev/naok1207', description: 'dev/naok1207' },
];
const allSugestions = [
    ...dev,
    { url: '', content: 'search', description: 'search' },
    ...mofmof,
];
const excludeUrl = (suggestions) => {
    return suggestions.map((suggest) => ({ content: suggest.content, description: suggest.description }));
};
const openLink = (url, disposition) => {
    if (disposition === 'currentTab') {
        chrome.tabs.update({ url });
    }
    else {
        chrome.tabs.create({ url });
    }
};
chrome.omnibox.onInputEntered.addListener((text, disposition) => __awaiter(void 0, void 0, void 0, function* () {
    let url = '';
    const selectedSuggestion = allSugestions.find(s => s.description === text);
    if (!text) {
        const result = yield chrome.storage.sync.get('github');
        const githubUsername = result.github.username || '';
        url = 'https://github.com/' + githubUsername;
    }
    else if (selectedSuggestion) {
        if (selectedSuggestion.content === 'search') {
            return;
        }
        else {
            url = selectedSuggestion.url;
        }
    }
    else {
    }
    openLink(url, disposition);
}));
// chrome.omnibox.onInputStarted.addListener(() => {
//   chrome.history.
// })
/**
 * text
 *  dev
 *
 */
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    if (text === "dev/mofmof" || text === "dev/mofmof/") {
        const parent = dev.find((item) => item.content === "dev/mofmof");
        if (parent)
            chrome.omnibox.setDefaultSuggestion({ description: parent.description });
        suggest(excludeUrl(mofmof));
    }
    else if (text === "dev" || text === "dev/") {
        suggest(excludeUrl(dev));
    }
    if (text === 'search') {
        const suggestions = [
            { content: 'search', description: 'search' }
        ];
        suggest(suggestions);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QyxJQUFJO0FBQ0o7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBLE1BQU0sa0hBQWtIO0FBQ3hILE1BQU0sNEdBQTRHO0FBQ2xIO0FBQ0E7QUFDQSxNQUFNLG9GQUFvRjtBQUMxRixNQUFNLDBGQUEwRjtBQUNoRztBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFtRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNERBQTREO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUNBQWlDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VFckZEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5keS1ob21lLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vaGFuZHktaG9tZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2hhbmR5LWhvbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2hhbmR5LWhvbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gY2hyb21lLm9tbmlib3gub25JbnB1dEVudGVyZWQuYWRkTGlzdGVuZXIoKHRleHQpID0+IHtcbi8vICAgLy8gRW5jb2RlIHVzZXIgaW5wdXQgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyAsIC8gPyA6IEAgJiA9ICsgJCAjXG4vLyAgIHZhciBuZXdVUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpO1xuLy8gICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IG5ld1VSTCB9KTtcbi8vIH0pO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyDmpJzntKLjg5Djg7zjgavjg4fjg5Xjgqnjg6vjg4jjgafooajnpLrjgZXjgozjgovmj5DmoYjjga7oqK3lrppcbi8vIGNocm9tZS5vbW5pYm94LnNldERlZmF1bHRTdWdnZXN0aW9uKHsgZGVzY3JpcHRpb246ICcuLi4nIH0pXG5jb25zdCBtb2Ztb2YgPSBbXG4gICAgeyB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbW9mbW9mL1VuaS1Db3F1ZScsIGNvbnRlbnQ6ICdkZXYvbW9mbW9mL1VuaS1Db3F1ZScsIGRlc2NyaXB0aW9uOiAnZGV2L21vZm1vZi9VbmktQ29xdWUnIH0sXG4gICAgeyB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbW9mbW9mL091clRpbWUnLCBjb250ZW50OiAnZGV2L21vZm1vZi9PdXJUaW1lJywgZGVzY3JpcHRpb246ICdkZXYvbW9mbW9mL091clRpbWUnIH0sXG5dO1xuY29uc3QgZGV2ID0gW1xuICAgIHsgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL21vZm1vZicsIGNvbnRlbnQ6ICdkZXYvbW9mbW9mJywgZGVzY3JpcHRpb246ICdkZXYvbW9mbW9mJyB9LFxuICAgIHsgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25hb2sxMjA3JywgY29udGVudDogJ2Rldi9uYW9rMTIwNycsIGRlc2NyaXB0aW9uOiAnZGV2L25hb2sxMjA3JyB9LFxuXTtcbmNvbnN0IGFsbFN1Z2VzdGlvbnMgPSBbXG4gICAgLi4uZGV2LFxuICAgIHsgdXJsOiAnJywgY29udGVudDogJ3NlYXJjaCcsIGRlc2NyaXB0aW9uOiAnc2VhcmNoJyB9LFxuICAgIC4uLm1vZm1vZixcbl07XG5jb25zdCBleGNsdWRlVXJsID0gKHN1Z2dlc3Rpb25zKSA9PiB7XG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdCkgPT4gKHsgY29udGVudDogc3VnZ2VzdC5jb250ZW50LCBkZXNjcmlwdGlvbjogc3VnZ2VzdC5kZXNjcmlwdGlvbiB9KSk7XG59O1xuY29uc3Qgb3BlbkxpbmsgPSAodXJsLCBkaXNwb3NpdGlvbikgPT4ge1xuICAgIGlmIChkaXNwb3NpdGlvbiA9PT0gJ2N1cnJlbnRUYWInKSB7XG4gICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZSh7IHVybCB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybCB9KTtcbiAgICB9XG59O1xuY2hyb21lLm9tbmlib3gub25JbnB1dEVudGVyZWQuYWRkTGlzdGVuZXIoKHRleHQsIGRpc3Bvc2l0aW9uKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgdXJsID0gJyc7XG4gICAgY29uc3Qgc2VsZWN0ZWRTdWdnZXN0aW9uID0gYWxsU3VnZXN0aW9ucy5maW5kKHMgPT4gcy5kZXNjcmlwdGlvbiA9PT0gdGV4dCk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdnaXRodWInKTtcbiAgICAgICAgY29uc3QgZ2l0aHViVXNlcm5hbWUgPSByZXN1bHQuZ2l0aHViLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9naXRodWIuY29tLycgKyBnaXRodWJVc2VybmFtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRTdWdnZXN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZFN1Z2dlc3Rpb24uY29udGVudCA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNlbGVjdGVkU3VnZ2VzdGlvbi51cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgfVxuICAgIG9wZW5MaW5rKHVybCwgZGlzcG9zaXRpb24pO1xufSkpO1xuLy8gY2hyb21lLm9tbmlib3gub25JbnB1dFN0YXJ0ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuLy8gICBjaHJvbWUuaGlzdG9yeS5cbi8vIH0pXG4vKipcbiAqIHRleHRcbiAqICBkZXZcbiAqXG4gKi9cbmNocm9tZS5vbW5pYm94Lm9uSW5wdXRDaGFuZ2VkLmFkZExpc3RlbmVyKCh0ZXh0LCBzdWdnZXN0KSA9PiB7XG4gICAgaWYgKHRleHQgPT09IFwiZGV2L21vZm1vZlwiIHx8IHRleHQgPT09IFwiZGV2L21vZm1vZi9cIikge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkZXYuZmluZCgoaXRlbSkgPT4gaXRlbS5jb250ZW50ID09PSBcImRldi9tb2Ztb2ZcIik7XG4gICAgICAgIGlmIChwYXJlbnQpXG4gICAgICAgICAgICBjaHJvbWUub21uaWJveC5zZXREZWZhdWx0U3VnZ2VzdGlvbih7IGRlc2NyaXB0aW9uOiBwYXJlbnQuZGVzY3JpcHRpb24gfSk7XG4gICAgICAgIHN1Z2dlc3QoZXhjbHVkZVVybChtb2Ztb2YpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGV4dCA9PT0gXCJkZXZcIiB8fCB0ZXh0ID09PSBcImRldi9cIikge1xuICAgICAgICBzdWdnZXN0KGV4Y2x1ZGVVcmwoZGV2KSk7XG4gICAgfVxuICAgIGlmICh0ZXh0ID09PSAnc2VhcmNoJykge1xuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IFtcbiAgICAgICAgICAgIHsgY29udGVudDogJ3NlYXJjaCcsIGRlc2NyaXB0aW9uOiAnc2VhcmNoJyB9XG4gICAgICAgIF07XG4gICAgICAgIHN1Z2dlc3Qoc3VnZ2VzdGlvbnMpO1xuICAgIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9iYWNrZ3JvdW5kLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=