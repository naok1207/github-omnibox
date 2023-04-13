// chrome.omnibox.onInputEntered.addListener((text) => {
//   // Encode user input for special characters , / ? : @ & = + $ #
//   var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
//   chrome.tabs.create({ url: newURL });
// });

// 検索バーにデフォルトで表示される提案の設定
// chrome.omnibox.setDefaultSuggestion({ description: '...' })

const mofmof = [
  {url: 'https://github.com/mofmof/Uni-Coque', content: 'dev/mofmof/Uni-Coque', description: 'dev/mofmof/Uni-Coque' },
  {url: 'https://github.com/mofmof/OurTime', content: 'dev/mofmof/OurTime', description: 'dev/mofmof/OurTime' },
]

const dev = [
  {url: 'https://github.com/mofmof', content: 'dev/mofmof', description: 'dev/mofmof'},
  {url: 'https://github.com/naok1207', content: 'dev/naok1207', description: 'dev/naok1207'},
]

const allSugestions = [
  ...dev,
  { url: '', content: 'search', description: 'search' },
  ...mofmof,
]

const excludeUrl = (suggestions: {
  url: string;
  content: string;
  description: string;
}[]) => {
  return suggestions.map((suggest) => ({ content: suggest.content, description: suggest.description }))
}

const openLink = (url: string, disposition: chrome.omnibox.OnInputEnteredDisposition) => {
  if (disposition === 'currentTab') {
    chrome.tabs.update({url});
  } else {
    chrome.tabs.create({url});
  }
}

chrome.omnibox.onInputEntered.addListener(async (text, disposition) => {
  let url = ''

  const selectedSuggestion = allSugestions.find(s => s.description === text);

  if (!text) {
    const result = await chrome.storage.sync.get('github')
    const githubUsername = result.github.username || ''
    url = 'https://github.com/' + githubUsername
  } else if (selectedSuggestion) {
    if (selectedSuggestion.content === 'search') {
      return
    } else {
      url = selectedSuggestion.url
    }
  } else {
  }

  openLink(url, disposition)
})

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
    const parent = dev.find((item) => item.content === "dev/mofmof")
    if (parent) chrome.omnibox.setDefaultSuggestion({ description: parent.description })
    suggest(excludeUrl(mofmof))
  } else if (text === "dev" || text === "dev/") {
    suggest(excludeUrl(dev));
  }
  if (text === 'search') {
    const suggestions = [
      { content: 'search', description: 'search' }
    ];
    suggest(suggestions)
  }
})
