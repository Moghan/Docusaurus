/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const siteConfig = require(process.cwd() + '/siteConfig.js');
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    const fbShowcase = siteConfig.users
      .filter(user => {
        return user.fbOpenSource === true;
      })
      .map((user, i) => {
        return (
          <a href={user.infoLink} key={i}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        );
      });

    const showcase = siteConfig.users
      .filter(user => {
        return !user.fbOpenSource;
      })
      .map((user, i) => {
        return (
          <a href={user.infoLink} key={i}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        );
      });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>
                <translate>Who is using Docusaurus?</translate>
              </h1>
              <p>
                Docusaurus powers some of Facebook's popular{' '}
                <a href="https://code.facebook.com/projects/">
                  open source projects
                </a>.
              </p>
            </div>
            <div className="logos">{fbShowcase}</div>
            <div className="prose">
              <p>
                <translate>
                  Docusaurus is also used by open source projects of all sizes.
                </translate>
              </p>
            </div>
            <div className="logos">{showcase}</div>
            <div className="prose">
              <p>
                <translate>Is your project using Docusaurus?</translate>
              </p>
              <p>
                Edit this page with a{' '}
                <a href="https://github.com/facebook/docusaurus/edit/master/website/data/users.json">
                  Pull Request
                </a>{' '}
                to add your logo.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
