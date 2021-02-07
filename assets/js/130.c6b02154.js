(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{490:function(e,n,a){"use strict";a.r(n);var t=a(11),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("在 CI 中缓存安装下来的依赖项是提速的关键，"),a("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Actions 官方文档"),a("OutboundLink")],1),e._v(" 提供了如下方案 (NPM)：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("jobs:\n  build:\n    # ...\n    - name: Cache node modules\n      uses: actions/cache@v2\n      env:\n        cache-name: cache-node-modules\n      with:\n        # npm cache files are stored in `~/.npm` on Linux/macOS\n        path: ~/.npm\n        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}\n        restore-keys: |\n          ${{ runner.os }}-build-${{ env.cache-name }}-\n          ${{ runner.os }}-build-\n          ${{ runner.os }}-\n    - name: Install Dependencies\n      run: npm install\n    # ...\n")])])]),a("p",[e._v("Yarn 则复杂，多了一步操作（"),a("a",{attrs:{href:"https://github.com/actions/cache/blob/9ab95382c899bf0953a0c6c1374373fc40456ffe/examples.md#node---yarn",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),a("OutboundLink")],1),e._v("）:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- name: Get yarn cache directory path\n  id: yarn-cache-dir-path\n  run: echo \"::set-output name=dir::$(yarn cache dir)\"\n- uses: actions/cache@v1\n  id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)\n  with:\n    path: ${{ steps.yarn-cache-dir-path.outputs.dir }}\n    key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}\n    restore-keys: |\n      ${{ runner.os }}-yarn-\n")])])]),a("p",[e._v("这些方案可以说是又臭又长，我只想简单做个 cache，何必让我关心那么多东西？项目多的话，简直疯了。看看人家 Gitlab 的方案：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - node_modules/\n")])])]),a("p",[e._v("简单、明确。")]),e._v(" "),a("p",[e._v("因此，我找到了这个 action "),a("a",{attrs:{href:"https://github.com/c-hive/gha-yarn-cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("c-hive/gha-yarn-cache"),a("OutboundLink")],1),e._v(" 作为替代，现在代码可以简化为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("jobs:\n  build:\n      # ...\n      - uses: c-hive/gha-yarn-cache@v1\n      - run: yarn --frozen-lockfile\n      # ...\n")])])]),a("p",[e._v("一行解决。")])])}),[],!1,null,null,null);n.default=r.exports}}]);