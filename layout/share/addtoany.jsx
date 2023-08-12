/**
 * AddToAny share buttons JSX component.
 * @module view/share/addtoany
 */
const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

/**
 * AddToAny share buttons JSX component.
 *
 * @see https://www.addtoany.com/buttons/
 * @example
 * <AddToAny />
 */
class AddToAny extends Component {
  render() {
    return (
      <>
      <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
      <i class="fas fa-share-nodes fa-2xl" style="float:left;margin-right: 10px;"></i>
      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a class="a2a_button_wechat"></a>
      <a class="a2a_button_telegram"></a>
      <a class="a2a_button_evernote"></a>
      <a class="a2a_button_pocket"></a>
      <a class="a2a_button_flipboard"></a>
      <a class="a2a_button_douban"></a>
      <a class="a2a_button_instapaper"></a>
      <a class="a2a_button_kindle_it"></a>
      <a class="a2a_button_email"></a>
      <a class="a2a_button_copy_link"></a>
      <i class="fa-light fa-share"></i>
      </div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
        <script src="https://static.addtoany.com/menu/page.js" defer={true}></script>
      </>
    );
  }
}

/**
 * Cacheable AddToAny share buttons JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <AddToAny.Cacheable />
 */
AddToAny.Cacheable = cacheComponent(AddToAny, 'share.addtoany', (props) => {
  return {};
});

module.exports = AddToAny;
