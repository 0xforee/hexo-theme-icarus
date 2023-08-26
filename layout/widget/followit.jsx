/**
 * follow.it widget JSX component.
 * @module view/widget/followit
 */
const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

/**
 * follow.it widget JSX component.
 *
 * @see https://follow.it/
 * @example
 * <FollowIt
 *     title="Widget title"
 *     description="Description text"
 *     buttonTitle="Subscribe now"
 *     actionUrl="https://api.follow.it/subscription-form/******" />
 */
class FollowIt extends Component {
  render() {
    const { title, description, actionUrl, buttonTitle } = this.props;

    return (
      <div class="card widget" data-type="subscribe-email">
        <div >
          <img class="fill" src="/img/wechat_follow.png" />
        </div>
      </div>
    );
  }
}

/**
 * Cacheable follow.it widget JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <FollowIt.Cacheable
 *     widget={{
 *         description: 'Description text',
 *         action_url: '******'
 *     }}
 *     helper={{ __: function() {...} }} />
 */
FollowIt.Cacheable = cacheComponent(FollowIt, 'widget.followit', (props) => {
  const { helper, widget } = props;
  const { action_url, description } = widget;

  return {
    description,
    actionUrl: action_url,
    title: helper.__('widget.followit'),
    buttonTitle: helper.__('widget.subscribe'),
  };
});

module.exports = FollowIt;
