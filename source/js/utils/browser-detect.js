export var BrowserDetect = {
  init() {
    this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
    this.OS = this.searchString(this.dataOS) || 'an unknown OS';
  },
  searchString(data) {
    for (let i = 0; i < data.length; i++) {
      let dataString = data[i].string;
      let dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1) {
          return data[i].identity;
        }
      } else if (dataProp) {
        return data[i].identity;
      }
    }
  },
  searchVersion(dataString) {
    let index = dataString.indexOf(this.versionSearchString);
    if (index == -1) {
      return;
    }
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: 'Chrome',
      identity: 'Chrome',
    },
    {string: navigator.userAgent,
      subString: 'OmniWeb',
      versionSearch: 'OmniWeb/',
      identity: 'OmniWeb',
    },
    {
      string: navigator.vendor,
      subString: 'Apple',
      identity: 'Safari',
      versionSearch: 'Version',
    },
    {
      prop: window.opera,
      identity: 'Opera',
      versionSearch: 'Version',
    },
    {
      string: navigator.vendor,
      subString: 'iCab',
      identity: 'iCab',
    },
    {
      string: navigator.vendor,
      subString: 'KDE',
      identity: 'Konqueror',
    },
    {
      string: navigator.userAgent,
      subString: 'Firefox',
      identity: 'Firefox',
    },
    {
      string: navigator.vendor,
      subString: 'Camino',
      identity: 'Camino',
    },
    {
      /* For Newer Netscapes (6+) */
      string: navigator.userAgent,
      subString: 'Netscape',
      identity: 'Netscape',
    },
    {
      string: navigator.userAgent,
      subString: 'MSIE',
      identity: 'Internet Explorer',
      versionSearch: 'MSIE',
    },
    {
      string: navigator.userAgent,
      subString: 'Gecko',
      identity: 'Mozilla',
      versionSearch: 'rv',
    },
    {
      /* For Older Netscapes (4-) */
      string: navigator.userAgent,
      subString: 'Mozilla',
      identity: 'Netscape',
      versionSearch: 'Mozilla',
    }
  ],
  dataOS: [
    {
      string: navigator.platform,
      subString: 'Win',
      identity: 'Windows',
    },
    {
      string: navigator.platform,
      subString: 'Mac',
      identity: 'Mac',
    },
    {
      string: navigator.userAgent,
      subString: 'iPhone',
      identity: 'iPhone/iPod',
    },
    {
      string: navigator.platform,
      subString: 'Linux',
      identity: 'Linux',
    }
  ],

};

BrowserDetect.init();

if (BrowserDetect.version === 119 && BrowserDetect.browser === 'Chrome') {
  alert('Ваша версия браузера устарела! Обновите до последней версии.');
}

if (BrowserDetect.version === 119 && BrowserDetect.browser === 'Firefox') {
  alert('Ваша версия браузера устарела! Обновите до последней версии.');
}

if (BrowserDetect.version === 10 && BrowserDetect.browser === 'Mozilla') {
  alert('Ваша версия браузера устарела! Обновите до последней версии.');
}
