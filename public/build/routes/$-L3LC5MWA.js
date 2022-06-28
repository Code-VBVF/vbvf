import {
  AlertBubble,
  Button_default,
  CardBody_default,
  CardImg_default,
  CardSubtitle_default,
  CardText_default,
  CardTitle_default,
  Card_default,
  Collapse_default,
  DropdownItem_default,
  DropdownMenu_default,
  DropdownToggle_default,
  ModalBody_default,
  ModalFooter_default,
  ModalHeader_default,
  Modal_default,
  NavItem_default,
  NavLink_default,
  Nav_default,
  NavbarBrand_default,
  NavbarToggler_default,
  Navbar_default,
  Spinner_default,
  UncontrolledDropdown,
  _defineProperty,
  _inheritsLoose,
  _objectWithoutPropertiesLoose,
  button_default,
  getMobileOperatingSystem,
  getVideos,
  isOver,
  livestreamHappeningNow,
  require_axios,
  require_classnames,
  require_image_url_umd,
  require_interopRequireDefault,
  require_prop_types,
  require_react_is,
  sanity,
  sanityUrlFor
} from "/build/_shared/chunk-S54LCQZQ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-XLUZAGGR.js";
import {
  Link,
  NavLink,
  Route,
  Routes,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  init_react_router_dom,
  require_object_assign,
  require_react,
  useLocation,
  useNavigate,
  useParams
} from "/build/_shared/chunk-SJQDL6BT.js";

// node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js"(exports2, module2) {
    init_react();
    var baseUrl = "https://docs.sanity.io/help/";
    module2.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js
var require_getImageUrl = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js"(exports2, module2) {
    "use strict";
    init_react();
    var generateHelpUrl = require_generate_help_url();
    var urlBuilder = require_image_url_umd();
    var objectAssign = require_object_assign();
    var enc = encodeURIComponent;
    var materializeError = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(generateHelpUrl("block-content-image-materializing"));
    var getQueryString = function getQueryString2(options) {
      var query = options.imageOptions;
      var keys2 = Object.keys(query);
      if (!keys2.length) {
        return "";
      }
      var params = keys2.map(function(key) {
        return "".concat(enc(key), "=").concat(enc(query[key]));
      });
      return "?".concat(params.join("&"));
    };
    var buildUrl = function buildUrl2(props) {
      var node2 = props.node, options = props.options;
      var projectId = options.projectId, dataset = options.dataset;
      var asset = node2.asset;
      if (!asset) {
        throw new Error("Image does not have required `asset` property");
      }
      if (asset.url) {
        return asset.url + getQueryString(options);
      }
      if (!projectId || !dataset) {
        throw new Error(materializeError);
      }
      var ref = asset._ref;
      if (!ref) {
        throw new Error("Invalid image reference in block, no `_ref` found on `asset`");
      }
      return urlBuilder(objectAssign({
        projectId,
        dataset
      }, options.imageOptions || {})).image(node2).toString();
    };
    module2.exports = buildUrl;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js
var require_serializers = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js"(exports2, module2) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    var getImageUrl = require_getImageUrl();
    module2.exports = function(h, serializerOpts) {
      var serializeOptions = serializerOpts || {
        useDashedStyles: false
      };
      function BlockSerializer(props) {
        var node2 = props.node, serializers = props.serializers, options = props.options, isInline = props.isInline, children = props.children;
        var blockType = node2._type;
        var serializer = serializers.types[blockType];
        if (!serializer) {
          throw new Error('Unknown block type "'.concat(blockType, '", please specify a serializer for it in the `serializers.types` prop'));
        }
        return h(serializer, {
          node: node2,
          options,
          isInline
        }, children);
      }
      function SpanSerializer(props) {
        var _props$node = props.node, mark = _props$node.mark, children = _props$node.children;
        var isPlain = typeof mark === "string";
        var markType = isPlain ? mark : mark._type;
        var serializer = props.serializers.marks[markType];
        if (!serializer) {
          console.warn('Unknown mark type "'.concat(markType, '", please specify a serializer for it in the `serializers.marks` prop'));
          return h(props.serializers.markFallback, null, children);
        }
        return h(serializer, props.node, children);
      }
      function ListSerializer(props) {
        var tag = props.type === "bullet" ? "ul" : "ol";
        return h(tag, null, props.children);
      }
      function ListItemSerializer(props) {
        var children = !props.node.style || props.node.style === "normal" ? props.children : h(props.serializers.types.block, props, props.children);
        return h("li", null, children);
      }
      function BlockTypeSerializer(props) {
        var style = props.node.style || "normal";
        if (/^h\d/.test(style)) {
          return h(style, null, props.children);
        }
        return style === "blockquote" ? h("blockquote", null, props.children) : h("p", null, props.children);
      }
      function RawMarkSerializer(tag, props) {
        return h(tag, null, props.children);
      }
      function UnderlineSerializer(props) {
        var style = serializeOptions.useDashedStyles ? {
          "text-decoration": "underline"
        } : {
          textDecoration: "underline"
        };
        return h("span", {
          style
        }, props.children);
      }
      function StrikeThroughSerializer(props) {
        return h("del", null, props.children);
      }
      function LinkSerializer(props) {
        return h("a", {
          href: props.mark.href
        }, props.children);
      }
      function ImageSerializer(props) {
        if (!props.node.asset) {
          return null;
        }
        var img = h("img", {
          src: getImageUrl(props)
        });
        return props.isInline ? img : h("figure", null, img);
      }
      function serializeSpan(span, serializers, index4, options) {
        if (span === "\n" && serializers.hardBreak) {
          return h(serializers.hardBreak, {
            key: "hb-".concat(index4)
          });
        }
        if (typeof span === "string") {
          return serializers.text ? h(serializers.text, {
            key: "text-".concat(index4)
          }, span) : span;
        }
        var children;
        if (span.children) {
          children = {
            children: span.children.map(function(child, i) {
              return options.serializeNode(child, i, span.children, true);
            })
          };
        }
        var serializedNode = objectAssign({}, span, children);
        return h(serializers.span, {
          key: span._key || "span-".concat(index4),
          node: serializedNode,
          serializers
        });
      }
      var HardBreakSerializer = function HardBreakSerializer2() {
        return h("br");
      };
      var defaultMarkSerializers = {
        strong: RawMarkSerializer.bind(null, "strong"),
        em: RawMarkSerializer.bind(null, "em"),
        code: RawMarkSerializer.bind(null, "code"),
        underline: UnderlineSerializer,
        "strike-through": StrikeThroughSerializer,
        link: LinkSerializer
      };
      var defaultSerializers = {
        types: {
          block: BlockTypeSerializer,
          image: ImageSerializer
        },
        marks: defaultMarkSerializers,
        list: ListSerializer,
        listItem: ListItemSerializer,
        block: BlockSerializer,
        span: SpanSerializer,
        hardBreak: HardBreakSerializer,
        container: "div",
        markFallback: "span",
        text: void 0,
        empty: ""
      };
      return {
        defaultSerializers,
        serializeSpan
      };
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js
var require_buildMarksTree = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js"(exports2, module2) {
    "use strict";
    init_react();
    var defaultMarks = ["strong", "em", "code", "underline", "strike-through"];
    var buildMarksTree = function buildMarksTree2(block) {
      var children = block.children, markDefs = block.markDefs;
      if (!children || !children.length) {
        return [];
      }
      var sortedMarks = children.map(sortMarksByOccurences);
      var rootNode = {
        _type: "span",
        children: []
      };
      var nodeStack = [rootNode];
      children.forEach(function(span, i) {
        var marksNeeded = sortedMarks[i];
        if (!marksNeeded) {
          var lastNode = nodeStack[nodeStack.length - 1];
          lastNode.children.push(span);
          return;
        }
        var pos = 1;
        if (nodeStack.length > 1) {
          for (pos; pos < nodeStack.length; pos++) {
            var mark = nodeStack[pos].markKey;
            var index4 = marksNeeded.indexOf(mark);
            if (index4 === -1) {
              break;
            }
            marksNeeded.splice(index4, 1);
          }
        }
        nodeStack = nodeStack.slice(0, pos);
        var currentNode = findLastParentNode(nodeStack);
        marksNeeded.forEach(function(mark2) {
          var node2 = {
            _type: "span",
            _key: span._key,
            children: [],
            mark: markDefs.find(function(def) {
              return def._key === mark2;
            }) || mark2,
            markKey: mark2
          };
          currentNode.children.push(node2);
          nodeStack.push(node2);
          currentNode = node2;
        });
        if (isTextSpan(span)) {
          var lines = span.text.split("\n");
          for (var line = lines.length; line-- > 1; ) {
            lines.splice(line, 0, "\n");
          }
          currentNode.children = currentNode.children.concat(lines);
        } else {
          currentNode.children = currentNode.children.concat(span);
        }
      });
      return rootNode.children;
    };
    function sortMarksByOccurences(span, i, spans) {
      if (!span.marks || span.marks.length === 0) {
        return span.marks || [];
      }
      var markOccurences = span.marks.reduce(function(occurences, mark) {
        occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;
        for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
          var sibling = spans[siblingIndex];
          if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
            occurences[mark]++;
          } else {
            break;
          }
        }
        return occurences;
      }, {});
      var sortByOccurence = sortMarks.bind(null, markOccurences);
      return span.marks.slice().sort(sortByOccurence);
    }
    function sortMarks(occurences, markA, markB) {
      var aOccurences = occurences[markA] || 0;
      var bOccurences = occurences[markB] || 0;
      if (aOccurences !== bOccurences) {
        return bOccurences - aOccurences;
      }
      var aDefaultPos = defaultMarks.indexOf(markA);
      var bDefaultPos = defaultMarks.indexOf(markB);
      if (aDefaultPos !== bDefaultPos) {
        return aDefaultPos - bDefaultPos;
      }
      if (markA < markB) {
        return -1;
      } else if (markA > markB) {
        return 1;
      }
      return 0;
    }
    function isTextSpan(node2) {
      return node2._type === "span" && typeof node2.text === "string" && (Array.isArray(node2.marks) || typeof node2.marks === "undefined");
    }
    function findLastParentNode(nodes) {
      for (var i = nodes.length - 1; i >= 0; i--) {
        var node2 = nodes[i];
        if (node2._type === "span" && node2.children) {
          return node2;
        }
      }
      return void 0;
    }
    module2.exports = buildMarksTree;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js
var require_nestLists = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js"(exports2, module2) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    function nestLists(blocks) {
      var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "html";
      var tree = [];
      var currentList;
      for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (!isListBlock(block)) {
          tree.push(block);
          currentList = null;
          continue;
        }
        if (!currentList) {
          currentList = listFromBlock(block);
          tree.push(currentList);
          continue;
        }
        if (blockMatchesList(block, currentList)) {
          currentList.children.push(block);
          continue;
        }
        if (block.level > currentList.level) {
          var newList = listFromBlock(block);
          if (mode === "html") {
            var lastListItem = lastChild(currentList);
            var newLastChild = objectAssign({}, lastListItem, {
              children: lastListItem.children.concat(newList)
            });
            currentList.children[currentList.children.length - 1] = newLastChild;
          } else {
            currentList.children.push(newList);
          }
          currentList = newList;
          continue;
        }
        if (block.level < currentList.level) {
          var match2 = findListMatching(tree[tree.length - 1], block);
          if (match2) {
            currentList = match2;
            currentList.children.push(block);
            continue;
          }
          currentList = listFromBlock(block);
          tree.push(currentList);
          continue;
        }
        if (block.listItem !== currentList.listItem) {
          var _match = findListMatching(tree[tree.length - 1], {
            level: block.level
          });
          if (_match && _match.listItem === block.listItem) {
            currentList = _match;
            currentList.children.push(block);
            continue;
          } else {
            currentList = listFromBlock(block);
            tree.push(currentList);
            continue;
          }
        }
        console.warn("Unknown state encountered for block", block);
        tree.push(block);
      }
      return tree;
    }
    function isListBlock(block) {
      return Boolean(block.listItem);
    }
    function blockMatchesList(block, list) {
      return block.level === list.level && block.listItem === list.listItem;
    }
    function listFromBlock(block) {
      return {
        _type: "list",
        _key: "".concat(block._key, "-parent"),
        level: block.level,
        listItem: block.listItem,
        children: [block]
      };
    }
    function lastChild(block) {
      return block.children && block.children[block.children.length - 1];
    }
    function findListMatching(rootNode, matching) {
      var filterOnType = typeof matching.listItem === "string";
      if (rootNode._type === "list" && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
        return rootNode;
      }
      var node2 = lastChild(rootNode);
      if (!node2) {
        return false;
      }
      return findListMatching(node2, matching);
    }
    module2.exports = nestLists;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js
var require_generateKeys = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js"(exports2, module2) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    module2.exports = function(blocks) {
      return blocks.map(function(block) {
        if (block._key) {
          return block;
        }
        return objectAssign({
          _key: getStaticKey(block)
        }, block);
      });
    };
    function getStaticKey(item) {
      return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, "");
    }
    function checksum(str) {
      var hash = 0;
      var strlen = str.length;
      if (strlen === 0) {
        return hash;
      }
      for (var i = 0; i < strlen; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
      }
      return hash;
    }
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js
var require_mergeSerializers = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js"(exports2, module2) {
    "use strict";
    init_react();
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var objectAssign = require_object_assign();
    var isDefined2 = function isDefined3(val) {
      return typeof val !== "undefined";
    };
    module2.exports = function mergeSerializers(defaultSerializers, userSerializers) {
      return Object.keys(defaultSerializers).reduce(function(acc, key) {
        var type = _typeof(defaultSerializers[key]);
        if (type === "function") {
          acc[key] = isDefined2(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
        } else if (type === "object") {
          acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
        } else {
          acc[key] = typeof userSerializers[key] === "undefined" ? defaultSerializers[key] : userSerializers[key];
        }
        return acc;
      }, {});
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js
var require_blocksToNodes = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js"(exports2, module2) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    var buildMarksTree = require_buildMarksTree();
    var nestLists = require_nestLists();
    var generateKeys = require_generateKeys();
    var mergeSerializers = require_mergeSerializers();
    var optionProps = ["projectId", "dataset", "imageOptions"];
    var isDefined2 = function isDefined3(val) {
      return typeof val !== "undefined";
    };
    var defaults = {
      imageOptions: {}
    };
    function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
      var props = objectAssign({}, defaults, properties);
      var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
      var keyedBlocks = generateKeys(rawBlocks);
      var blocks = nestLists(keyedBlocks, props.listNestMode);
      var serializers = mergeSerializers(defaultSerializers, props.serializers || {});
      var options = optionProps.reduce(function(opts, key) {
        var value = props[key];
        if (isDefined2(value)) {
          opts[key] = value;
        }
        return opts;
      }, {});
      function serializeNode(node2, index4, siblings, isInline) {
        if (isList(node2)) {
          return serializeList(node2);
        }
        if (isListItem(node2)) {
          return serializeListItem(node2, findListItemIndex(node2, siblings));
        }
        if (isSpan(node2)) {
          return serializeSpan(node2, serializers, index4, {
            serializeNode
          });
        }
        return serializeBlock(node2, index4, isInline);
      }
      function findListItemIndex(node2, siblings) {
        var index4 = 0;
        for (var i = 0; i < siblings.length; i++) {
          if (siblings[i] === node2) {
            return index4;
          }
          if (!isListItem(siblings[i])) {
            continue;
          }
          index4++;
        }
        return index4;
      }
      function serializeBlock(block, index4, isInline) {
        var tree = buildMarksTree(block);
        var children = tree.map(function(node2, i, siblings) {
          return serializeNode(node2, i, siblings, true);
        });
        var blockProps = {
          key: block._key || "block-".concat(index4),
          node: block,
          isInline,
          serializers,
          options
        };
        return h(serializers.block, blockProps, children);
      }
      function serializeListItem(block, index4) {
        var key = block._key;
        var tree = buildMarksTree(block);
        var children = tree.map(serializeNode);
        return h(serializers.listItem, {
          node: block,
          serializers,
          index: index4,
          key,
          options
        }, children);
      }
      function serializeList(list) {
        var type = list.listItem;
        var level = list.level;
        var key = list._key;
        var children = list.children.map(serializeNode);
        return h(serializers.list, {
          key,
          level,
          type,
          options
        }, children);
      }
      var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);
      var nodes = blocks.map(serializeNode);
      if (renderContainerOnSingleChild || nodes.length > 1) {
        var containerProps = props.className ? {
          className: props.className
        } : {};
        return h(serializers.container, containerProps, nodes);
      }
      if (nodes[0]) {
        return nodes[0];
      }
      return typeof serializers.empty === "function" ? h(serializers.empty) : serializers.empty;
    }
    function isList(block) {
      return block._type === "list" && block.listItem;
    }
    function isListItem(block) {
      return block._type === "block" && block.listItem;
    }
    function isSpan(block) {
      return typeof block === "string" || block.marks || block._type === "span";
    }
    module2.exports = blocksToNodes;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/internals.js
var require_internals = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/internals.js"(exports2, module2) {
    "use strict";
    init_react();
    var getSerializers = require_serializers();
    var _blocksToNodes = require_blocksToNodes();
    var getImageUrl = require_getImageUrl();
    var mergeSerializers = require_mergeSerializers();
    module2.exports = {
      blocksToNodes: function blocksToNodes(renderNode, props, defaultSerializers, serializeSpan) {
        if (defaultSerializers) {
          return _blocksToNodes(renderNode, props, defaultSerializers, serializeSpan);
        }
        var serializers = getSerializers(renderNode);
        return _blocksToNodes(renderNode, props, serializers.defaultSerializers, serializers.serializeSpan);
      },
      getSerializers,
      getImageUrl,
      mergeSerializers
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/internals.js
var require_internals2 = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/internals.js"(exports2, module2) {
    init_react();
    module2.exports = require_internals();
  }
});

// node_modules/@sanity/block-content-to-react/lib/targets/dom.js
var require_dom = __commonJS({
  "node_modules/@sanity/block-content-to-react/lib/targets/dom.js"(exports2, module2) {
    "use strict";
    init_react();
    var React56 = require_react();
    var _require = require_internals2();
    var getSerializers = _require.getSerializers;
    var renderNode = React56.createElement;
    var _getSerializers = getSerializers(renderNode);
    var defaultSerializers = _getSerializers.defaultSerializers;
    var serializeSpan = _getSerializers.serializeSpan;
    module2.exports = {
      serializeSpan,
      serializers: defaultSerializers,
      renderProps: { nestMarks: true }
    };
  }
});

// node_modules/@sanity/block-content-to-react/lib/BlockContent.js
var require_BlockContent = __commonJS({
  "node_modules/@sanity/block-content-to-react/lib/BlockContent.js"(exports2, module2) {
    "use strict";
    init_react();
    var React56 = require_react();
    var PropTypes4 = require_prop_types();
    var internals = require_internals2();
    var _require = require_dom();
    var serializers = _require.serializers;
    var serializeSpan = _require.serializeSpan;
    var renderProps = _require.renderProps;
    var getImageUrl = internals.getImageUrl;
    var blocksToNodes = internals.blocksToNodes;
    var mergeSerializers = internals.mergeSerializers;
    var renderNode = React56.createElement;
    var SanityBlockContent = function SanityBlockContent2(props) {
      var customSerializers = mergeSerializers(SanityBlockContent2.defaultSerializers, props.serializers);
      var blockProps = Object.assign({}, renderProps, props, {
        serializers: customSerializers,
        blocks: props.blocks || []
      });
      return blocksToNodes(renderNode, blockProps, serializers, serializeSpan);
    };
    SanityBlockContent.defaultSerializers = serializers;
    SanityBlockContent.getImageUrl = getImageUrl;
    SanityBlockContent.propTypes = {
      className: PropTypes4.string,
      renderContainerOnSingleChild: PropTypes4.bool,
      projectId: PropTypes4.string,
      dataset: PropTypes4.string,
      imageOptions: PropTypes4.object,
      serializers: PropTypes4.shape({
        types: PropTypes4.object,
        marks: PropTypes4.object,
        list: PropTypes4.func,
        listItem: PropTypes4.func,
        block: PropTypes4.func,
        span: PropTypes4.func
      }),
      blocks: PropTypes4.oneOfType([PropTypes4.arrayOf(PropTypes4.shape({
        _type: PropTypes4.string.isRequired
      })), PropTypes4.shape({
        _type: PropTypes4.string.isRequired
      })]).isRequired
    };
    SanityBlockContent.defaultProps = {
      renderContainerOnSingleChild: false,
      serializers: {},
      imageOptions: {}
    };
    module2.exports = SanityBlockContent;
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports2, module2) {
    init_react();
    function _extends4() {
      module2.exports = _extends4 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      return _extends4.apply(this, arguments);
    }
    module2.exports = _extends4, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports2, module2) {
    init_react();
    function _objectWithoutPropertiesLoose4(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    module2.exports = _objectWithoutPropertiesLoose4, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/reactstrap/lib/utils.js
var require_utils = __commonJS({
  "node_modules/reactstrap/lib/utils.js"(exports2) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    exports2.__esModule = true;
    exports2.getScrollbarWidth = getScrollbarWidth;
    exports2.setScrollbarWidth = setScrollbarWidth;
    exports2.isBodyOverflowing = isBodyOverflowing;
    exports2.getOriginalBodyPadding = getOriginalBodyPadding;
    exports2.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
    exports2.setGlobalCssModule = setGlobalCssModule;
    exports2.mapToCssModules = mapToCssModules;
    exports2.omit = omit;
    exports2.pick = pick;
    exports2.warnOnce = warnOnce;
    exports2.deprecated = deprecated;
    exports2.DOMElement = DOMElement;
    exports2.isReactRefObj = isReactRefObj;
    exports2.toNumber = toNumber;
    exports2.isObject = isObject8;
    exports2.isFunction = isFunction5;
    exports2.findDOMElements = findDOMElements;
    exports2.isArrayOrNodeList = isArrayOrNodeList;
    exports2.getTarget = getTarget;
    exports2.addMultipleEventListeners = addMultipleEventListeners;
    exports2.focusableElements = exports2.defaultToggleEvents = exports2.canUseDOM = exports2.PopperPlacements = exports2.keyCodes = exports2.TransitionStatuses = exports2.TransitionPropTypeKeys = exports2.TransitionTimeouts = exports2.tagPropType = exports2.targetPropType = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    function getScrollbarWidth() {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }
    function setScrollbarWidth(padding) {
      document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
    }
    function isBodyOverflowing() {
      return document.body.clientWidth < window.innerWidth;
    }
    function getOriginalBodyPadding() {
      var style = window.getComputedStyle(document.body, null);
      return parseInt(style && style.getPropertyValue("padding-right") || 0, 10);
    }
    function conditionallyUpdateScrollbar() {
      var scrollbarWidth = getScrollbarWidth();
      var fixedContent = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0];
      var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
      if (isBodyOverflowing()) {
        setScrollbarWidth(bodyPadding + scrollbarWidth);
      }
    }
    var globalCssModule;
    function setGlobalCssModule(cssModule) {
      globalCssModule = cssModule;
    }
    function mapToCssModules(className, cssModule) {
      if (className === void 0) {
        className = "";
      }
      if (cssModule === void 0) {
        cssModule = globalCssModule;
      }
      if (!cssModule)
        return className;
      return className.split(" ").map(function(c2) {
        return cssModule[c2] || c2;
      }).join(" ");
    }
    function omit(obj, omitKeys) {
      var result = {};
      Object.keys(obj).forEach(function(key) {
        if (omitKeys.indexOf(key) === -1) {
          result[key] = obj[key];
        }
      });
      return result;
    }
    function pick(obj, keys2) {
      var pickKeys = Array.isArray(keys2) ? keys2 : [keys2];
      var length2 = pickKeys.length;
      var key;
      var result = {};
      while (length2 > 0) {
        length2 -= 1;
        key = pickKeys[length2];
        result[key] = obj[key];
      }
      return result;
    }
    var warned = {};
    function warnOnce(message) {
      if (!warned[message]) {
        if (typeof console !== "undefined") {
          console.error(message);
        }
        warned[message] = true;
      }
    }
    function deprecated(propType, explanation) {
      return function validate2(props, propName, componentName) {
        if (props[propName] !== null && typeof props[propName] !== "undefined") {
          warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
        }
        for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        return propType.apply(void 0, [props, propName, componentName].concat(rest));
      };
    }
    var Element2 = typeof window === "object" && window.Element || function() {
    };
    function DOMElement(props, propName, componentName) {
      if (!(props[propName] instanceof Element2)) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
      }
    }
    var targetPropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, DOMElement, _propTypes.default.shape({
      current: _propTypes.default.any
    })]);
    exports2.targetPropType = targetPropType;
    var tagPropType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
      $$typeof: _propTypes.default.symbol,
      render: _propTypes.default.func
    }), _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.shape({
      $$typeof: _propTypes.default.symbol,
      render: _propTypes.default.func
    })]))]);
    exports2.tagPropType = tagPropType;
    var TransitionTimeouts = {
      Fade: 150,
      Collapse: 350,
      Modal: 300,
      Carousel: 600
    };
    exports2.TransitionTimeouts = TransitionTimeouts;
    var TransitionPropTypeKeys = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
    exports2.TransitionPropTypeKeys = TransitionPropTypeKeys;
    var TransitionStatuses = {
      ENTERING: "entering",
      ENTERED: "entered",
      EXITING: "exiting",
      EXITED: "exited"
    };
    exports2.TransitionStatuses = TransitionStatuses;
    var keyCodes = {
      esc: 27,
      space: 32,
      enter: 13,
      tab: 9,
      up: 38,
      down: 40,
      home: 36,
      end: 35,
      n: 78,
      p: 80
    };
    exports2.keyCodes = keyCodes;
    var PopperPlacements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
    exports2.PopperPlacements = PopperPlacements;
    var canUseDOM2 = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    exports2.canUseDOM = canUseDOM2;
    function isReactRefObj(target) {
      if (target && typeof target === "object") {
        return "current" in target;
      }
      return false;
    }
    function getTag2(value) {
      if (value == null) {
        return value === void 0 ? "[object Undefined]" : "[object Null]";
      }
      return Object.prototype.toString.call(value);
    }
    function toNumber(value) {
      var type = typeof value;
      var NAN = 0 / 0;
      if (type === "number") {
        return value;
      }
      if (type === "symbol" || type === "object" && getTag2(value) === "[object Symbol]") {
        return NAN;
      }
      if (isObject8(value)) {
        var other = typeof value.valueOf === "function" ? value.valueOf() : value;
        value = isObject8(other) ? "" + other : other;
      }
      if (type !== "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(/^\s+|\s+$/g, "");
      var isBinary = /^0b[01]+$/i.test(value);
      return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
    }
    function isObject8(value) {
      var type = typeof value;
      return value != null && (type === "object" || type === "function");
    }
    function isFunction5(value) {
      if (!isObject8(value)) {
        return false;
      }
      var tag = getTag2(value);
      return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
    }
    function findDOMElements(target) {
      if (isReactRefObj(target)) {
        return target.current;
      }
      if (isFunction5(target)) {
        return target();
      }
      if (typeof target === "string" && canUseDOM2) {
        var selection = document.querySelectorAll(target);
        if (!selection.length) {
          selection = document.querySelectorAll("#" + target);
        }
        if (!selection.length) {
          throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
        }
        return selection;
      }
      return target;
    }
    function isArrayOrNodeList(els) {
      if (els === null) {
        return false;
      }
      return Array.isArray(els) || canUseDOM2 && typeof els.length === "number";
    }
    function getTarget(target, allElements) {
      var els = findDOMElements(target);
      if (allElements) {
        if (isArrayOrNodeList(els)) {
          return els;
        }
        if (els === null) {
          return [];
        }
        return [els];
      } else {
        if (isArrayOrNodeList(els)) {
          return els[0];
        }
        return els;
      }
    }
    var defaultToggleEvents = ["touchstart", "click"];
    exports2.defaultToggleEvents = defaultToggleEvents;
    function addMultipleEventListeners(_els, handler, _events, useCapture) {
      var els = _els;
      if (!isArrayOrNodeList(els)) {
        els = [els];
      }
      var events = _events;
      if (typeof events === "string") {
        events = events.split(/\s+/);
      }
      if (!isArrayOrNodeList(els) || typeof handler !== "function" || !Array.isArray(events)) {
        throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
      }
      Array.prototype.forEach.call(events, function(event) {
        Array.prototype.forEach.call(els, function(el) {
          el.addEventListener(event, handler, useCapture);
        });
      });
      return function removeEvents() {
        Array.prototype.forEach.call(events, function(event) {
          Array.prototype.forEach.call(els, function(el) {
            el.removeEventListener(event, handler, useCapture);
          });
        });
      };
    }
    var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
    exports2.focusableElements = focusableElements;
  }
});

// node_modules/reactstrap/lib/Spinner.js
var require_Spinner = __commonJS({
  "node_modules/reactstrap/lib/Spinner.js"(exports2) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    exports2.__esModule = true;
    exports2.default = void 0;
    var _extends22 = _interopRequireDefault(require_extends());
    var _objectWithoutPropertiesLoose22 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var _excluded5 = ["className", "cssModule", "type", "size", "color", "children", "tag"];
    var propTypes2 = {
      tag: _utils.tagPropType,
      type: _propTypes.default.string,
      size: _propTypes.default.string,
      color: _propTypes.default.string,
      className: _propTypes.default.string,
      cssModule: _propTypes.default.object,
      children: _propTypes.default.string
    };
    var defaultProps = {
      tag: "div",
      type: "border",
      children: "Loading..."
    };
    var Spinner2 = function Spinner3(props) {
      var className = props.className, cssModule = props.cssModule, type = props.type, size = props.size, color2 = props.color, children = props.children, Tag = props.tag, attributes = (0, _objectWithoutPropertiesLoose22.default)(props, _excluded5);
      var classes = (0, _utils.mapToCssModules)((0, _classnames.default)(className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color2 ? "text-" + color2 : false), cssModule);
      return /* @__PURE__ */ _react.default.createElement(Tag, (0, _extends22.default)({
        role: "status"
      }, attributes, {
        className: classes
      }), children && /* @__PURE__ */ _react.default.createElement("span", {
        className: (0, _utils.mapToCssModules)("sr-only", cssModule)
      }, children));
    };
    Spinner2.propTypes = propTypes2;
    Spinner2.defaultProps = defaultProps;
    var _default2 = Spinner2;
    exports2.default = _default2;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports2, module2) {
    "use strict";
    init_react();
    var isArray2 = Array.isArray;
    var keyList = Object.keys;
    var hasProp = Object.prototype.hasOwnProperty;
    var hasElementType = typeof Element !== "undefined";
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        var arrA = isArray2(a2), arrB = isArray2(b2), i, length2, key;
        if (arrA && arrB) {
          length2 = a2.length;
          if (length2 != b2.length)
            return false;
          for (i = length2; i-- !== 0; )
            if (!equal(a2[i], b2[i]))
              return false;
          return true;
        }
        if (arrA != arrB)
          return false;
        var dateA = a2 instanceof Date, dateB = b2 instanceof Date;
        if (dateA != dateB)
          return false;
        if (dateA && dateB)
          return a2.getTime() == b2.getTime();
        var regexpA = a2 instanceof RegExp, regexpB = b2 instanceof RegExp;
        if (regexpA != regexpB)
          return false;
        if (regexpA && regexpB)
          return a2.toString() == b2.toString();
        var keys2 = keyList(a2);
        length2 = keys2.length;
        if (length2 !== keyList(b2).length)
          return false;
        for (i = length2; i-- !== 0; )
          if (!hasProp.call(b2, keys2[i]))
            return false;
        if (hasElementType && a2 instanceof Element && b2 instanceof Element)
          return a2 === b2;
        for (i = length2; i-- !== 0; ) {
          key = keys2[i];
          if (key === "_owner" && a2.$$typeof) {
            continue;
          } else {
            if (!equal(a2[key], b2[key]))
              return false;
          }
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module2.exports = function exportedEqual(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error) {
        if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
          console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports2, module2) {
    "use strict";
    init_react();
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty2 = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist2) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist2);
          }
        }
        var keys2 = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys2.length; ++i) {
          var key = keys2[i];
          if (!KNOWN_STATICS[key] && !(blacklist2 && blacklist2[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty2(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics2;
  }
});

// node_modules/synchronous-promise/index.js
var require_synchronous_promise = __commonJS({
  "node_modules/synchronous-promise/index.js"(exports2, module2) {
    "use strict";
    init_react();
    function makeArrayFrom(obj) {
      return Array.prototype.slice.apply(obj);
    }
    var PENDING = "pending";
    var RESOLVED = "resolved";
    var REJECTED = "rejected";
    function SynchronousPromise4(handler) {
      this.status = PENDING;
      this._continuations = [];
      this._parent = null;
      this._paused = false;
      if (handler) {
        handler.call(this, this._continueWith.bind(this), this._failWith.bind(this));
      }
    }
    function looksLikeAPromise(obj) {
      return obj && typeof obj.then === "function";
    }
    function passThrough(value) {
      return value;
    }
    SynchronousPromise4.prototype = {
      then: function(nextFn, catchFn) {
        var next = SynchronousPromise4.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused) {
            this._continuations.push({
              promise: next,
              nextFn,
              catchFn
            });
            return next;
          }
          if (catchFn) {
            try {
              var catchResult = catchFn(this._error);
              if (looksLikeAPromise(catchResult)) {
                this._chainPromiseData(catchResult, next);
                return next;
              } else {
                return SynchronousPromise4.resolve(catchResult)._setParent(this);
              }
            } catch (e) {
              return SynchronousPromise4.reject(e)._setParent(this);
            }
          }
          return SynchronousPromise4.reject(this._error)._setParent(this);
        }
        this._continuations.push({
          promise: next,
          nextFn,
          catchFn
        });
        this._runResolutions();
        return next;
      },
      catch: function(handler) {
        if (this._isResolved()) {
          return SynchronousPromise4.resolve(this._data)._setParent(this);
        }
        var next = SynchronousPromise4.unresolved()._setParent(this);
        this._continuations.push({
          promise: next,
          catchFn: handler
        });
        this._runRejections();
        return next;
      },
      finally: function(callback) {
        var ran = false;
        function runFinally(result, err) {
          if (!ran) {
            ran = true;
            if (!callback) {
              callback = passThrough;
            }
            var callbackResult = callback(result);
            if (looksLikeAPromise(callbackResult)) {
              return callbackResult.then(function() {
                if (err) {
                  throw err;
                }
                return result;
              });
            } else {
              return result;
            }
          }
        }
        return this.then(function(result) {
          return runFinally(result);
        }).catch(function(err) {
          return runFinally(null, err);
        });
      },
      pause: function() {
        this._paused = true;
        return this;
      },
      resume: function() {
        var firstPaused = this._findFirstPaused();
        if (firstPaused) {
          firstPaused._paused = false;
          firstPaused._runResolutions();
          firstPaused._runRejections();
        }
        return this;
      },
      _findAncestry: function() {
        return this._continuations.reduce(function(acc, cur) {
          if (cur.promise) {
            var node2 = {
              promise: cur.promise,
              children: cur.promise._findAncestry()
            };
            acc.push(node2);
          }
          return acc;
        }, []);
      },
      _setParent: function(parent) {
        if (this._parent) {
          throw new Error("parent already set");
        }
        this._parent = parent;
        return this;
      },
      _continueWith: function(data) {
        var firstPending = this._findFirstPending();
        if (firstPending) {
          firstPending._data = data;
          firstPending._setResolved();
        }
      },
      _findFirstPending: function() {
        return this._findFirstAncestor(function(test2) {
          return test2._isPending && test2._isPending();
        });
      },
      _findFirstPaused: function() {
        return this._findFirstAncestor(function(test2) {
          return test2._paused;
        });
      },
      _findFirstAncestor: function(matching) {
        var test2 = this;
        var result;
        while (test2) {
          if (matching(test2)) {
            result = test2;
          }
          test2 = test2._parent;
        }
        return result;
      },
      _failWith: function(error) {
        var firstRejected = this._findFirstPending();
        if (firstRejected) {
          firstRejected._error = error;
          firstRejected._setRejected();
        }
      },
      _takeContinuations: function() {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function() {
        if (this._paused || !this._isRejected()) {
          return;
        }
        var error = this._error, continuations = this._takeContinuations(), self2 = this;
        continuations.forEach(function(cont) {
          if (cont.catchFn) {
            try {
              var catchResult = cont.catchFn(error);
              self2._handleUserFunctionResult(catchResult, cont.promise);
            } catch (e) {
              cont.promise.reject(e);
            }
          } else {
            cont.promise.reject(error);
          }
        });
      },
      _runResolutions: function() {
        if (this._paused || !this._isResolved() || this._isPending()) {
          return;
        }
        var continuations = this._takeContinuations();
        if (looksLikeAPromise(this._data)) {
          return this._handleWhenResolvedDataIsPromise(this._data);
        }
        var data = this._data;
        var self2 = this;
        continuations.forEach(function(cont) {
          if (cont.nextFn) {
            try {
              var result = cont.nextFn(data);
              self2._handleUserFunctionResult(result, cont.promise);
            } catch (e) {
              self2._handleResolutionError(e, cont);
            }
          } else if (cont.promise) {
            cont.promise.resolve(data);
          }
        });
      },
      _handleResolutionError: function(e, continuation) {
        this._setRejected();
        if (continuation.catchFn) {
          try {
            continuation.catchFn(e);
            return;
          } catch (e2) {
            e = e2;
          }
        }
        if (continuation.promise) {
          continuation.promise.reject(e);
        }
      },
      _handleWhenResolvedDataIsPromise: function(data) {
        var self2 = this;
        return data.then(function(result) {
          self2._data = result;
          self2._runResolutions();
        }).catch(function(error) {
          self2._error = error;
          self2._setRejected();
          self2._runRejections();
        });
      },
      _handleUserFunctionResult: function(data, nextSynchronousPromise) {
        if (looksLikeAPromise(data)) {
          this._chainPromiseData(data, nextSynchronousPromise);
        } else {
          nextSynchronousPromise.resolve(data);
        }
      },
      _chainPromiseData: function(promiseData, nextSynchronousPromise) {
        promiseData.then(function(newData) {
          nextSynchronousPromise.resolve(newData);
        }).catch(function(newError) {
          nextSynchronousPromise.reject(newError);
        });
      },
      _setResolved: function() {
        this.status = RESOLVED;
        if (!this._paused) {
          this._runResolutions();
        }
      },
      _setRejected: function() {
        this.status = REJECTED;
        if (!this._paused) {
          this._runRejections();
        }
      },
      _isPending: function() {
        return this.status === PENDING;
      },
      _isResolved: function() {
        return this.status === RESOLVED;
      },
      _isRejected: function() {
        return this.status === REJECTED;
      }
    };
    SynchronousPromise4.resolve = function(result) {
      return new SynchronousPromise4(function(resolve2, reject) {
        if (looksLikeAPromise(result)) {
          result.then(function(newResult) {
            resolve2(newResult);
          }).catch(function(error) {
            reject(error);
          });
        } else {
          resolve2(result);
        }
      });
    };
    SynchronousPromise4.reject = function(result) {
      return new SynchronousPromise4(function(resolve2, reject) {
        reject(result);
      });
    };
    SynchronousPromise4.unresolved = function() {
      return new SynchronousPromise4(function(resolve2, reject) {
        this.resolve = resolve2;
        this.reject = reject;
      });
    };
    SynchronousPromise4.all = function() {
      var args = makeArrayFrom(arguments);
      if (Array.isArray(args[0])) {
        args = args[0];
      }
      if (!args.length) {
        return SynchronousPromise4.resolve([]);
      }
      return new SynchronousPromise4(function(resolve2, reject) {
        var allData = [], numResolved = 0, doResolve = function() {
          if (numResolved === args.length) {
            resolve2(allData);
          }
        }, rejected = false, doReject = function(err) {
          if (rejected) {
            return;
          }
          rejected = true;
          reject(err);
        };
        args.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            allData[idx] = thisResult;
            numResolved += 1;
            doResolve();
          }).catch(function(err) {
            doReject(err);
          });
        });
      });
    };
    function createAggregateErrorFrom(errors) {
      if (typeof window !== "undefined" && "AggregateError" in window) {
        return new window.AggregateError(errors);
      }
      return { errors };
    }
    SynchronousPromise4.any = function() {
      var args = makeArrayFrom(arguments);
      if (Array.isArray(args[0])) {
        args = args[0];
      }
      if (!args.length) {
        return SynchronousPromise4.reject(createAggregateErrorFrom([]));
      }
      return new SynchronousPromise4(function(resolve2, reject) {
        var allErrors = [], numRejected = 0, doReject = function() {
          if (numRejected === args.length) {
            reject(createAggregateErrorFrom(allErrors));
          }
        }, resolved = false, doResolve = function(result) {
          if (resolved) {
            return;
          }
          resolved = true;
          resolve2(result);
        };
        args.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            doResolve(thisResult);
          }).catch(function(err) {
            allErrors[idx] = err;
            numRejected += 1;
            doReject();
          });
        });
      });
    };
    SynchronousPromise4.allSettled = function() {
      var args = makeArrayFrom(arguments);
      if (Array.isArray(args[0])) {
        args = args[0];
      }
      if (!args.length) {
        return SynchronousPromise4.resolve([]);
      }
      return new SynchronousPromise4(function(resolve2) {
        var allData = [], numSettled = 0, doSettled = function() {
          numSettled += 1;
          if (numSettled === args.length) {
            resolve2(allData);
          }
        };
        args.forEach(function(arg, idx) {
          SynchronousPromise4.resolve(arg).then(function(thisResult) {
            allData[idx] = {
              status: "fulfilled",
              value: thisResult
            };
            doSettled();
          }).catch(function(err) {
            allData[idx] = {
              status: "rejected",
              reason: err
            };
            doSettled();
          });
        });
      });
    };
    if (Promise === SynchronousPromise4) {
      throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
    }
    var RealPromise = Promise;
    SynchronousPromise4.installGlobally = function(__awaiter6) {
      if (Promise === SynchronousPromise4) {
        return __awaiter6;
      }
      var result = patchAwaiterIfRequired(__awaiter6);
      Promise = SynchronousPromise4;
      return result;
    };
    SynchronousPromise4.uninstallGlobally = function() {
      if (Promise === SynchronousPromise4) {
        Promise = RealPromise;
      }
    };
    function patchAwaiterIfRequired(__awaiter6) {
      if (typeof __awaiter6 === "undefined" || __awaiter6.__patched) {
        return __awaiter6;
      }
      var originalAwaiter = __awaiter6;
      __awaiter6 = function() {
        var Promise3 = RealPromise;
        originalAwaiter.apply(this, makeArrayFrom(arguments));
      };
      __awaiter6.__patched = true;
      return __awaiter6;
    }
    module2.exports = {
      SynchronousPromise: SynchronousPromise4
    };
  }
});

// node_modules/property-expr/index.js
var require_property_expr = __commonJS({
  "node_modules/property-expr/index.js"(exports2, module2) {
    "use strict";
    init_react();
    function Cache(maxSize) {
      this._maxSize = maxSize;
      this.clear();
    }
    Cache.prototype.clear = function() {
      this._size = 0;
      this._values = /* @__PURE__ */ Object.create(null);
    };
    Cache.prototype.get = function(key) {
      return this._values[key];
    };
    Cache.prototype.set = function(key, value) {
      this._size >= this._maxSize && this.clear();
      if (!(key in this._values))
        this._size++;
      return this._values[key] = value;
    };
    var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
    var DIGIT_REGEX = /^\d+$/;
    var LEAD_DIGIT_REGEX = /^\d/;
    var SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
    var CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
    var MAX_CACHE_SIZE = 512;
    var pathCache = new Cache(MAX_CACHE_SIZE);
    var setCache = new Cache(MAX_CACHE_SIZE);
    var getCache = new Cache(MAX_CACHE_SIZE);
    module2.exports = {
      Cache,
      split: split2,
      normalizePath,
      setter: function(path) {
        var parts = normalizePath(path);
        return setCache.get(path) || setCache.set(path, function setter(obj, value) {
          var index4 = 0;
          var len = parts.length;
          var data = obj;
          while (index4 < len - 1) {
            var part = parts[index4];
            if (part === "__proto__" || part === "constructor" || part === "prototype") {
              return obj;
            }
            data = data[parts[index4++]];
          }
          data[parts[index4]] = value;
        });
      },
      getter: function(path, safe) {
        var parts = normalizePath(path);
        return getCache.get(path) || getCache.set(path, function getter3(data) {
          var index4 = 0, len = parts.length;
          while (index4 < len) {
            if (data != null || !safe)
              data = data[parts[index4++]];
            else
              return;
          }
          return data;
        });
      },
      join: function(segments) {
        return segments.reduce(function(path, part) {
          return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
        }, "");
      },
      forEach: function(path, cb2, thisArg) {
        forEach2(Array.isArray(path) ? path : split2(path), cb2, thisArg);
      }
    };
    function normalizePath(path) {
      return pathCache.get(path) || pathCache.set(path, split2(path).map(function(part) {
        return part.replace(CLEAN_QUOTES_REGEX, "$2");
      }));
    }
    function split2(path) {
      return path.match(SPLIT_REGEX) || [""];
    }
    function forEach2(parts, iter, thisArg) {
      var len = parts.length, part, idx, isArray2, isBracket;
      for (idx = 0; idx < len; idx++) {
        part = parts[idx];
        if (part) {
          if (shouldBeQuoted(part)) {
            part = '"' + part + '"';
          }
          isBracket = isQuoted(part);
          isArray2 = !isBracket && /^\d+$/.test(part);
          iter.call(thisArg, part, isBracket, isArray2, idx, parts);
        }
      }
    }
    function isQuoted(str) {
      return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
    }
    function hasLeadingNumber(part) {
      return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
    }
    function hasSpecialChars(part) {
      return SPEC_CHAR_REGEX.test(part);
    }
    function shouldBeQuoted(part) {
      return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
    }
  }
});

// node_modules/toposort/index.js
var require_toposort = __commonJS({
  "node_modules/toposort/index.js"(exports2, module2) {
    init_react();
    module2.exports = function(edges) {
      return toposort2(uniqueNodes(edges), edges);
    };
    module2.exports.array = toposort2;
    function toposort2(nodes, edges) {
      var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
      edges.forEach(function(edge) {
        if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
          throw new Error("Unknown node. There is an unknown node in the supplied edges.");
        }
      });
      while (i--) {
        if (!visited[i])
          visit(nodes[i], i, /* @__PURE__ */ new Set());
      }
      return sorted;
      function visit(node2, i2, predecessors) {
        if (predecessors.has(node2)) {
          var nodeRep;
          try {
            nodeRep = ", node was:" + JSON.stringify(node2);
          } catch (e) {
            nodeRep = "";
          }
          throw new Error("Cyclic dependency" + nodeRep);
        }
        if (!nodesHash.has(node2)) {
          throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node2));
        }
        if (visited[i2])
          return;
        visited[i2] = true;
        var outgoing = outgoingEdges.get(node2) || /* @__PURE__ */ new Set();
        outgoing = Array.from(outgoing);
        if (i2 = outgoing.length) {
          predecessors.add(node2);
          do {
            var child = outgoing[--i2];
            visit(child, nodesHash.get(child), predecessors);
          } while (i2);
          predecessors.delete(node2);
        }
        sorted[--cursor] = node2;
      }
    }
    function uniqueNodes(arr) {
      var res = /* @__PURE__ */ new Set();
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        res.add(edge[0]);
        res.add(edge[1]);
      }
      return Array.from(res);
    }
    function makeOutgoingEdges(arr) {
      var edges = /* @__PURE__ */ new Map();
      for (var i = 0, len = arr.length; i < len; i++) {
        var edge = arr[i];
        if (!edges.has(edge[0]))
          edges.set(edge[0], /* @__PURE__ */ new Set());
        if (!edges.has(edge[1]))
          edges.set(edge[1], /* @__PURE__ */ new Set());
        edges.get(edge[0]).add(edge[1]);
      }
      return edges;
    }
    function makeNodesHash(arr) {
      var res = /* @__PURE__ */ new Map();
      for (var i = 0, len = arr.length; i < len; i++) {
        res.set(arr[i], i);
      }
      return res;
    }
  }
});

// node_modules/framer-motion/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/framer-motion/node_modules/tslib/tslib.js"(exports2, module2) {
    init_react();
    var __extends6;
    var __assign7;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root2 = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d[p] = b2[p];
      };
      __extends6 = function(d, b2) {
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest6 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator6 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding6 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar6 = function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !exports3.hasOwnProperty(p))
            exports3[p] = m[p];
      };
      __values6 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read6 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign7);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// node_modules/style-value-types/node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "node_modules/style-value-types/node_modules/tslib/tslib.js"(exports2, module2) {
    init_react();
    var __extends6;
    var __assign7;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root2 = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d[p] = b2[p];
      };
      __extends6 = function(d, b2) {
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest6 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator6 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding6 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar6 = function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !exports3.hasOwnProperty(p))
            exports3[p] = m[p];
      };
      __values6 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read6 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign7);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// node_modules/stylefire/node_modules/tslib/tslib.js
var require_tslib3 = __commonJS({
  "node_modules/stylefire/node_modules/tslib/tslib.js"(exports2, module2) {
    init_react();
    var __extends6;
    var __assign7;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root2 = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d[p] = b2[p];
      };
      __extends6 = function(d, b2) {
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest6 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator6 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding6 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar6 = function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !exports3.hasOwnProperty(p))
            exports3[p] = m[p];
      };
      __values6 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read6 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign7);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// node_modules/popmotion/node_modules/tslib/tslib.js
var require_tslib4 = __commonJS({
  "node_modules/popmotion/node_modules/tslib/tslib.js"(exports2, module2) {
    init_react();
    var __extends6;
    var __assign7;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __createBinding6;
    (function(factory) {
      var root2 = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d[p] = b2[p];
      };
      __extends6 = function(d, b2) {
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest6 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator6 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding6 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar6 = function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !exports3.hasOwnProperty(p))
            exports3[p] = m[p];
      };
      __values6 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read6 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign7);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
    });
  }
});

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize2(fn) {
  var cache2 = {};
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn(arg);
    return cache2[arg];
  };
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esm({
  "node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
    init_react();
    memoize_browser_esm_default = memoize2;
  }
});

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var is_prop_valid_browser_esm_exports = {};
__export(is_prop_valid_browser_esm_exports, {
  default: () => is_prop_valid_browser_esm_default
});
var reactPropsRegex, index3, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esm({
  "node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
    init_react();
    init_memoize_browser_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index3 = memoize_browser_esm_default(function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    is_prop_valid_browser_esm_default = index3;
  }
});

// node_modules/lodash.sortby/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.sortby/index.js"(exports2, module2) {
    init_react();
    var LARGE_ARRAY_SIZE2 = 200;
    var FUNC_ERROR_TEXT2 = "Expected a function";
    var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
    var UNORDERED_COMPARE_FLAG = 1;
    var PARTIAL_COMPARE_FLAG = 2;
    var INFINITY3 = 1 / 0;
    var MAX_SAFE_INTEGER3 = 9007199254740991;
    var argsTag5 = "[object Arguments]";
    var arrayTag4 = "[object Array]";
    var boolTag5 = "[object Boolean]";
    var dateTag5 = "[object Date]";
    var errorTag4 = "[object Error]";
    var funcTag4 = "[object Function]";
    var genTag3 = "[object GeneratorFunction]";
    var mapTag8 = "[object Map]";
    var numberTag5 = "[object Number]";
    var objectTag6 = "[object Object]";
    var promiseTag2 = "[object Promise]";
    var regexpTag5 = "[object RegExp]";
    var setTag8 = "[object Set]";
    var stringTag6 = "[object String]";
    var symbolTag5 = "[object Symbol]";
    var weakMapTag4 = "[object WeakMap]";
    var arrayBufferTag5 = "[object ArrayBuffer]";
    var dataViewTag6 = "[object DataView]";
    var float32Tag4 = "[object Float32Array]";
    var float64Tag4 = "[object Float64Array]";
    var int8Tag4 = "[object Int8Array]";
    var int16Tag4 = "[object Int16Array]";
    var int32Tag4 = "[object Int32Array]";
    var uint8Tag4 = "[object Uint8Array]";
    var uint8ClampedTag4 = "[object Uint8ClampedArray]";
    var uint16Tag4 = "[object Uint16Array]";
    var uint32Tag4 = "[object Uint32Array]";
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp2 = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar2 = /\\(\\)?/g;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags2 = {};
    typedArrayTags2[float32Tag4] = typedArrayTags2[float64Tag4] = typedArrayTags2[int8Tag4] = typedArrayTags2[int16Tag4] = typedArrayTags2[int32Tag4] = typedArrayTags2[uint8Tag4] = typedArrayTags2[uint8ClampedTag4] = typedArrayTags2[uint16Tag4] = typedArrayTags2[uint32Tag4] = true;
    typedArrayTags2[argsTag5] = typedArrayTags2[arrayTag4] = typedArrayTags2[arrayBufferTag5] = typedArrayTags2[boolTag5] = typedArrayTags2[dataViewTag6] = typedArrayTags2[dateTag5] = typedArrayTags2[errorTag4] = typedArrayTags2[funcTag4] = typedArrayTags2[mapTag8] = typedArrayTags2[numberTag5] = typedArrayTags2[objectTag6] = typedArrayTags2[regexpTag5] = typedArrayTags2[setTag8] = typedArrayTags2[stringTag6] = typedArrayTags2[weakMapTag4] = false;
    var freeGlobal2 = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
    var freeProcess2 = moduleExports4 && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        return freeProcess2 && freeProcess2.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
    function apply(func2, thisArg, args) {
      switch (args.length) {
        case 0:
          return func2.call(thisArg);
        case 1:
          return func2.call(thisArg, args[0]);
        case 2:
          return func2.call(thisArg, args[0], args[1]);
        case 3:
          return func2.call(thisArg, args[0], args[1], args[2]);
      }
      return func2.apply(thisArg, args);
    }
    function arrayMap2(array2, iteratee) {
      var index4 = -1, length2 = array2 ? array2.length : 0, result = Array(length2);
      while (++index4 < length2) {
        result[index4] = iteratee(array2[index4], index4, array2);
      }
      return result;
    }
    function arrayPush2(array2, values2) {
      var index4 = -1, length2 = values2.length, offset2 = array2.length;
      while (++index4 < length2) {
        array2[offset2 + index4] = values2[index4];
      }
      return array2;
    }
    function arraySome2(array2, predicate) {
      var index4 = -1, length2 = array2 ? array2.length : 0;
      while (++index4 < length2) {
        if (predicate(array2[index4], index4, array2)) {
          return true;
        }
      }
      return false;
    }
    function baseProperty2(key) {
      return function(object3) {
        return object3 == null ? void 0 : object3[key];
      };
    }
    function baseSortBy(array2, comparer) {
      var length2 = array2.length;
      array2.sort(comparer);
      while (length2--) {
        array2[length2] = array2[length2].value;
      }
      return array2;
    }
    function baseTimes2(n, iteratee) {
      var index4 = -1, result = Array(n);
      while (++index4 < n) {
        result[index4] = iteratee(index4);
      }
      return result;
    }
    function baseUnary2(func2) {
      return function(value) {
        return func2(value);
      };
    }
    function getValue2(object3, key) {
      return object3 == null ? void 0 : object3[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray2(map) {
      var index4 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index4] = [key, value];
      });
      return result;
    }
    function overArg2(func2, transform2) {
      return function(arg) {
        return func2(transform2(arg));
      };
    }
    function setToArray2(set) {
      var index4 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index4] = value;
      });
      return result;
    }
    var arrayProto2 = Array.prototype;
    var funcProto4 = Function.prototype;
    var objectProto18 = Object.prototype;
    var coreJsData2 = root2["__core-js_shared__"];
    var maskSrcKey2 = function() {
      var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString4 = funcProto4.toString;
    var hasOwnProperty15 = objectProto18.hasOwnProperty;
    var objectToString2 = objectProto18.toString;
    var reIsNative2 = RegExp("^" + funcToString4.call(hasOwnProperty15).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Symbol3 = root2.Symbol;
    var Uint8Array2 = root2.Uint8Array;
    var propertyIsEnumerable3 = objectProto18.propertyIsEnumerable;
    var splice2 = arrayProto2.splice;
    var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
    var nativeKeys2 = overArg2(Object.keys, Object);
    var nativeMax = Math.max;
    var DataView2 = getNative2(root2, "DataView");
    var Map3 = getNative2(root2, "Map");
    var Promise3 = getNative2(root2, "Promise");
    var Set3 = getNative2(root2, "Set");
    var WeakMap3 = getNative2(root2, "WeakMap");
    var nativeCreate2 = getNative2(Object, "create");
    var dataViewCtorString2 = toSource2(DataView2);
    var mapCtorString2 = toSource2(Map3);
    var promiseCtorString2 = toSource2(Promise3);
    var setCtorString2 = toSource2(Set3);
    var weakMapCtorString2 = toSource2(WeakMap3);
    var symbolProto4 = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf3 = symbolProto4 ? symbolProto4.valueOf : void 0;
    var symbolToString3 = symbolProto4 ? symbolProto4.toString : void 0;
    function Hash2(entries) {
      var index4 = -1, length2 = entries ? entries.length : 0;
      this.clear();
      while (++index4 < length2) {
        var entry = entries[index4];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
    }
    function hashDelete2(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet2(key) {
      var data = this.__data__;
      if (nativeCreate2) {
        var result = data[key];
        return result === HASH_UNDEFINED4 ? void 0 : result;
      }
      return hasOwnProperty15.call(data, key) ? data[key] : void 0;
    }
    function hashHas2(key) {
      var data = this.__data__;
      return nativeCreate2 ? data[key] !== void 0 : hasOwnProperty15.call(data, key);
    }
    function hashSet2(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED4 : value;
      return this;
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    function ListCache2(entries) {
      var index4 = -1, length2 = entries ? entries.length : 0;
      this.clear();
      while (++index4 < length2) {
        var entry = entries[index4];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear2() {
      this.__data__ = [];
    }
    function listCacheDelete2(key) {
      var data = this.__data__, index4 = assocIndexOf2(data, key);
      if (index4 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index4 == lastIndex) {
        data.pop();
      } else {
        splice2.call(data, index4, 1);
      }
      return true;
    }
    function listCacheGet2(key) {
      var data = this.__data__, index4 = assocIndexOf2(data, key);
      return index4 < 0 ? void 0 : data[index4][1];
    }
    function listCacheHas2(key) {
      return assocIndexOf2(this.__data__, key) > -1;
    }
    function listCacheSet2(key, value) {
      var data = this.__data__, index4 = assocIndexOf2(data, key);
      if (index4 < 0) {
        data.push([key, value]);
      } else {
        data[index4][1] = value;
      }
      return this;
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    function MapCache2(entries) {
      var index4 = -1, length2 = entries ? entries.length : 0;
      this.clear();
      while (++index4 < length2) {
        var entry = entries[index4];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear2() {
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map3 || ListCache2)(),
        "string": new Hash2()
      };
    }
    function mapCacheDelete2(key) {
      return getMapData2(this, key)["delete"](key);
    }
    function mapCacheGet2(key) {
      return getMapData2(this, key).get(key);
    }
    function mapCacheHas2(key) {
      return getMapData2(this, key).has(key);
    }
    function mapCacheSet2(key, value) {
      getMapData2(this, key).set(key, value);
      return this;
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    function SetCache2(values2) {
      var index4 = -1, length2 = values2 ? values2.length : 0;
      this.__data__ = new MapCache2();
      while (++index4 < length2) {
        this.add(values2[index4]);
      }
    }
    function setCacheAdd2(value) {
      this.__data__.set(value, HASH_UNDEFINED4);
      return this;
    }
    function setCacheHas2(value) {
      return this.__data__.has(value);
    }
    SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
    SetCache2.prototype.has = setCacheHas2;
    function Stack2(entries) {
      this.__data__ = new ListCache2(entries);
    }
    function stackClear2() {
      this.__data__ = new ListCache2();
    }
    function stackDelete2(key) {
      return this.__data__["delete"](key);
    }
    function stackGet2(key) {
      return this.__data__.get(key);
    }
    function stackHas2(key) {
      return this.__data__.has(key);
    }
    function stackSet2(key, value) {
      var cache2 = this.__data__;
      if (cache2 instanceof ListCache2) {
        var pairs = cache2.__data__;
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache2 = this.__data__ = new MapCache2(pairs);
      }
      cache2.set(key, value);
      return this;
    }
    Stack2.prototype.clear = stackClear2;
    Stack2.prototype["delete"] = stackDelete2;
    Stack2.prototype.get = stackGet2;
    Stack2.prototype.has = stackHas2;
    Stack2.prototype.set = stackSet2;
    function arrayLikeKeys2(value, inherited) {
      var result = isArray2(value) || isArguments2(value) ? baseTimes2(value.length, String) : [];
      var length2 = result.length, skipIndexes = !!length2;
      for (var key in value) {
        if ((inherited || hasOwnProperty15.call(value, key)) && !(skipIndexes && (key == "length" || isIndex2(key, length2)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf2(array2, key) {
      var length2 = array2.length;
      while (length2--) {
        if (eq2(array2[length2][0], key)) {
          return length2;
        }
      }
      return -1;
    }
    var baseEach = createBaseEach(baseForOwn2);
    function baseFlatten(array2, depth, predicate, isStrict, result) {
      var index4 = -1, length2 = array2.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index4 < length2) {
        var value = array2[index4];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush2(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    var baseFor2 = createBaseFor2();
    function baseForOwn2(object3, iteratee) {
      return object3 && baseFor2(object3, iteratee, keys2);
    }
    function baseGet2(object3, path) {
      path = isKey2(path, object3) ? [path] : castPath2(path);
      var index4 = 0, length2 = path.length;
      while (object3 != null && index4 < length2) {
        object3 = object3[toKey2(path[index4++])];
      }
      return index4 && index4 == length2 ? object3 : void 0;
    }
    function baseGetTag2(value) {
      return objectToString2.call(value);
    }
    function baseHasIn2(object3, key) {
      return object3 != null && key in Object(object3);
    }
    function baseIsEqual2(value, other, customizer, bitmask, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObject8(value) && !isObjectLike2(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep2(value, other, baseIsEqual2, customizer, bitmask, stack);
    }
    function baseIsEqualDeep2(object3, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray2(object3), othIsArr = isArray2(other), objTag = arrayTag4, othTag = arrayTag4;
      if (!objIsArr) {
        objTag = getTag2(object3);
        objTag = objTag == argsTag5 ? objectTag6 : objTag;
      }
      if (!othIsArr) {
        othTag = getTag2(other);
        othTag = othTag == argsTag5 ? objectTag6 : othTag;
      }
      var objIsObj = objTag == objectTag6 && !isHostObject(object3), othIsObj = othTag == objectTag6 && !isHostObject(other), isSameTag = objTag == othTag;
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack2());
        return objIsArr || isTypedArray2(object3) ? equalArrays2(object3, other, equalFunc, customizer, bitmask, stack) : equalByTag2(object3, other, objTag, equalFunc, customizer, bitmask, stack);
      }
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty15.call(object3, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty15.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object3.value() : object3, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack2());
          return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack2());
      return equalObjects2(object3, other, equalFunc, customizer, bitmask, stack);
    }
    function baseIsMatch2(object3, source, matchData, customizer) {
      var index4 = matchData.length, length2 = index4, noCustomizer = !customizer;
      if (object3 == null) {
        return !length2;
      }
      object3 = Object(object3);
      while (index4--) {
        var data = matchData[index4];
        if (noCustomizer && data[2] ? data[1] !== object3[data[0]] : !(data[0] in object3)) {
          return false;
        }
      }
      while (++index4 < length2) {
        data = matchData[index4];
        var key = data[0], objValue = object3[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object3)) {
            return false;
          }
        } else {
          var stack = new Stack2();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object3, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual2(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    function baseIsNative2(value) {
      if (!isObject8(value) || isMasked2(value)) {
        return false;
      }
      var pattern = isFunction5(value) || isHostObject(value) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value));
    }
    function baseIsTypedArray2(value) {
      return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[objectToString2.call(value)];
    }
    function baseIteratee2(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity3;
      }
      if (typeof value == "object") {
        return isArray2(value) ? baseMatchesProperty2(value[0], value[1]) : baseMatches2(value);
      }
      return property2(value);
    }
    function baseKeys2(object3) {
      if (!isPrototype2(object3)) {
        return nativeKeys2(object3);
      }
      var result = [];
      for (var key in Object(object3)) {
        if (hasOwnProperty15.call(object3, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function baseMap(collection, iteratee) {
      var index4 = -1, result = isArrayLike2(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index4] = iteratee(value, key, collection2);
      });
      return result;
    }
    function baseMatches2(source) {
      var matchData = getMatchData2(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable2(matchData[0][0], matchData[0][1]);
      }
      return function(object3) {
        return object3 === source || baseIsMatch2(object3, source, matchData);
      };
    }
    function baseMatchesProperty2(path, srcValue) {
      if (isKey2(path) && isStrictComparable2(srcValue)) {
        return matchesStrictComparable2(toKey2(path), srcValue);
      }
      return function(object3) {
        var objValue = get2(object3, path);
        return objValue === void 0 && objValue === srcValue ? hasIn2(object3, path) : baseIsEqual2(srcValue, objValue, void 0, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }
    function baseOrderBy(collection, iteratees, orders) {
      var index4 = -1;
      iteratees = arrayMap2(iteratees.length ? iteratees : [identity3], baseUnary2(baseIteratee2));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap2(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index4, "value": value };
      });
      return baseSortBy(result, function(object3, other) {
        return compareMultiple(object3, other, orders);
      });
    }
    function basePropertyDeep2(path) {
      return function(object3) {
        return baseGet2(object3, path);
      };
    }
    function baseRest(func2, start) {
      start = nativeMax(start === void 0 ? func2.length - 1 : start, 0);
      return function() {
        var args = arguments, index4 = -1, length2 = nativeMax(args.length - start, 0), array2 = Array(length2);
        while (++index4 < length2) {
          array2[index4] = args[start + index4];
        }
        index4 = -1;
        var otherArgs = Array(start + 1);
        while (++index4 < start) {
          otherArgs[index4] = args[index4];
        }
        otherArgs[start] = array2;
        return apply(func2, this, otherArgs);
      };
    }
    function baseToString2(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol2(value)) {
        return symbolToString3 ? symbolToString3.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
    }
    function castPath2(value) {
      return isArray2(value) ? value : stringToPath2(value);
    }
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    function compareMultiple(object3, other, orders) {
      var index4 = -1, objCriteria = object3.criteria, othCriteria = other.criteria, length2 = objCriteria.length, ordersLength = orders.length;
      while (++index4 < length2) {
        var result = compareAscending(objCriteria[index4], othCriteria[index4]);
        if (result) {
          if (index4 >= ordersLength) {
            return result;
          }
          var order3 = orders[index4];
          return result * (order3 == "desc" ? -1 : 1);
        }
      }
      return object3.index - other.index;
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike2(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length2 = collection.length, index4 = fromRight ? length2 : -1, iterable = Object(collection);
        while (fromRight ? index4-- : ++index4 < length2) {
          if (iteratee(iterable[index4], index4, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    function createBaseFor2(fromRight) {
      return function(object3, iteratee, keysFunc) {
        var index4 = -1, iterable = Object(object3), props = keysFunc(object3), length2 = props.length;
        while (length2--) {
          var key = props[fromRight ? length2 : ++index4];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object3;
      };
    }
    function equalArrays2(array2, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array2);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index4 = -1, result = true, seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache2() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index4 < arrLength) {
        var arrValue = array2[index4], othValue = other[index4];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index4, other, array2, stack) : customizer(arrValue, othValue, index4, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome2(other, function(othValue2, othIndex) {
            if (!seen.has(othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result;
    }
    function equalByTag2(object3, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag6:
          if (object3.byteLength != other.byteLength || object3.byteOffset != other.byteOffset) {
            return false;
          }
          object3 = object3.buffer;
          other = other.buffer;
        case arrayBufferTag5:
          if (object3.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object3), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag5:
        case dateTag5:
        case numberTag5:
          return eq2(+object3, +other);
        case errorTag4:
          return object3.name == other.name && object3.message == other.message;
        case regexpTag5:
        case stringTag6:
          return object3 == other + "";
        case mapTag8:
          var convert = mapToArray2;
        case setTag8:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          convert || (convert = setToArray2);
          if (object3.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object3);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= UNORDERED_COMPARE_FLAG;
          stack.set(object3, other);
          var result = equalArrays2(convert(object3), convert(other), equalFunc, customizer, bitmask, stack);
          stack["delete"](object3);
          return result;
        case symbolTag5:
          if (symbolValueOf3) {
            return symbolValueOf3.call(object3) == symbolValueOf3.call(other);
          }
      }
      return false;
    }
    function equalObjects2(object3, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys2(object3), objLength = objProps.length, othProps = keys2(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index4 = objLength;
      while (index4--) {
        var key = objProps[index4];
        if (!(isPartial ? key in other : hasOwnProperty15.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object3);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object3, other);
      stack.set(other, object3);
      var skipCtor = isPartial;
      while (++index4 < objLength) {
        key = objProps[index4];
        var objValue = object3[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object3, stack) : customizer(objValue, othValue, key, object3, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object3.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object3 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object3);
      stack["delete"](other);
      return result;
    }
    function getMapData2(map, key) {
      var data = map.__data__;
      return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getMatchData2(object3) {
      var result = keys2(object3), length2 = result.length;
      while (length2--) {
        var key = result[length2], value = object3[key];
        result[length2] = [key, value, isStrictComparable2(value)];
      }
      return result;
    }
    function getNative2(object3, key) {
      var value = getValue2(object3, key);
      return baseIsNative2(value) ? value : void 0;
    }
    var getTag2 = baseGetTag2;
    if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag6 || Map3 && getTag2(new Map3()) != mapTag8 || Promise3 && getTag2(Promise3.resolve()) != promiseTag2 || Set3 && getTag2(new Set3()) != setTag8 || WeakMap3 && getTag2(new WeakMap3()) != weakMapTag4) {
      getTag2 = function(value) {
        var result = objectToString2.call(value), Ctor = result == objectTag6 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString2:
              return dataViewTag6;
            case mapCtorString2:
              return mapTag8;
            case promiseCtorString2:
              return promiseTag2;
            case setCtorString2:
              return setTag8;
            case weakMapCtorString2:
              return weakMapTag4;
          }
        }
        return result;
      };
    }
    function hasPath2(object3, path, hasFunc) {
      path = isKey2(path, object3) ? [path] : castPath2(path);
      var result, index4 = -1, length2 = path.length;
      while (++index4 < length2) {
        var key = toKey2(path[index4]);
        if (!(result = object3 != null && hasFunc(object3, key))) {
          break;
        }
        object3 = object3[key];
      }
      if (result) {
        return result;
      }
      var length2 = object3 ? object3.length : 0;
      return !!length2 && isLength2(length2) && isIndex2(key, length2) && (isArray2(object3) || isArguments2(object3));
    }
    function isFlattenable(value) {
      return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    function isIndex2(value, length2) {
      length2 = length2 == null ? MAX_SAFE_INTEGER3 : length2;
      return !!length2 && (typeof value == "number" || reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
    }
    function isIterateeCall(value, index4, object3) {
      if (!isObject8(object3)) {
        return false;
      }
      var type = typeof index4;
      if (type == "number" ? isArrayLike2(object3) && isIndex2(index4, object3.length) : type == "string" && index4 in object3) {
        return eq2(object3[index4], value);
      }
      return false;
    }
    function isKey2(value, object3) {
      if (isArray2(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
        return true;
      }
      return reIsPlainProp2.test(value) || !reIsDeepProp2.test(value) || object3 != null && value in Object(object3);
    }
    function isKeyable2(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked2(func2) {
      return !!maskSrcKey2 && maskSrcKey2 in func2;
    }
    function isPrototype2(value) {
      var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto18;
      return value === proto2;
    }
    function isStrictComparable2(value) {
      return value === value && !isObject8(value);
    }
    function matchesStrictComparable2(key, srcValue) {
      return function(object3) {
        if (object3 == null) {
          return false;
        }
        return object3[key] === srcValue && (srcValue !== void 0 || key in Object(object3));
      };
    }
    var stringToPath2 = memoize3(function(string3) {
      string3 = toString3(string3);
      var result = [];
      if (reLeadingDot.test(string3)) {
        result.push("");
      }
      string3.replace(rePropName2, function(match2, number3, quote, string4) {
        result.push(quote ? string4.replace(reEscapeChar2, "$1") : number3 || match2);
      });
      return result;
    });
    function toKey2(value) {
      if (typeof value == "string" || isSymbol2(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
    }
    function toSource2(func2) {
      if (func2 != null) {
        try {
          return funcToString4.call(func2);
        } catch (e) {
        }
        try {
          return func2 + "";
        } catch (e) {
        }
      }
      return "";
    }
    var sortBy2 = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length2 = iteratees.length;
      if (length2 > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length2 > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    function memoize3(func2, resolver) {
      if (typeof func2 != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
        if (cache2.has(key)) {
          return cache2.get(key);
        }
        var result = func2.apply(this, args);
        memoized.cache = cache2.set(key, result);
        return result;
      };
      memoized.cache = new (memoize3.Cache || MapCache2)();
      return memoized;
    }
    memoize3.Cache = MapCache2;
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments2(value) {
      return isArrayLikeObject(value) && hasOwnProperty15.call(value, "callee") && (!propertyIsEnumerable3.call(value, "callee") || objectToString2.call(value) == argsTag5);
    }
    var isArray2 = Array.isArray;
    function isArrayLike2(value) {
      return value != null && isLength2(value.length) && !isFunction5(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike2(value) && isArrayLike2(value);
    }
    function isFunction5(value) {
      var tag = isObject8(value) ? objectToString2.call(value) : "";
      return tag == funcTag4 || tag == genTag3;
    }
    function isLength2(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
    }
    function isObject8(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike2(value) && objectToString2.call(value) == symbolTag5;
    }
    var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
    function toString3(value) {
      return value == null ? "" : baseToString2(value);
    }
    function get2(object3, path, defaultValue) {
      var result = object3 == null ? void 0 : baseGet2(object3, path);
      return result === void 0 ? defaultValue : result;
    }
    function hasIn2(object3, path) {
      return object3 != null && hasPath2(object3, path, baseHasIn2);
    }
    function keys2(object3) {
      return isArrayLike2(object3) ? arrayLikeKeys2(object3) : baseKeys2(object3);
    }
    function identity3(value) {
      return value;
    }
    function property2(path) {
      return isKey2(path) ? baseProperty2(toKey2(path)) : basePropertyDeep2(path);
    }
    module2.exports = sortBy2;
  }
});

// node_modules/smoothscroll-polyfill/dist/smoothscroll.js
var require_smoothscroll = __commonJS({
  "node_modules/smoothscroll-polyfill/dist/smoothscroll.js"(exports2, module2) {
    init_react();
    (function() {
      "use strict";
      function polyfill() {
        var w = window;
        var d = document;
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }
        var Element2 = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element2.prototype.scroll || scrollElement,
          scrollIntoView: Element2.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            return true;
          }
          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            return false;
          }
          throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }
        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME;
          elapsed = elapsed > 1 ? 1 : elapsed;
          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY);
          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }
          step({
            scrollable,
            method,
            startTime,
            startX,
            startY,
            x,
            y
          });
        }
        w.scroll = w.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset);
            return;
          }
          smoothScroll.call(w, d.body, arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };
        w.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
            return;
          }
          smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        Element2.prototype.scroll = Element2.prototype.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;
          smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
        };
        Element2.prototype.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };
        Element2.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === void 0 ? true : arguments[0]);
            return;
          }
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      if (typeof exports2 === "object" && typeof module2 !== "undefined") {
        module2.exports = { polyfill };
      } else {
        polyfill();
      }
    })();
  }
});

// node_modules/tslib/tslib.js
var require_tslib5 = __commonJS({
  "node_modules/tslib/tslib.js"(exports2, module2) {
    init_react();
    var __extends6;
    var __assign7;
    var __rest6;
    var __decorate6;
    var __param6;
    var __metadata6;
    var __awaiter6;
    var __generator6;
    var __exportStar6;
    var __values6;
    var __read6;
    var __spread6;
    var __spreadArrays6;
    var __spreadArray2;
    var __await6;
    var __asyncGenerator6;
    var __asyncDelegator6;
    var __asyncValues6;
    var __makeTemplateObject6;
    var __importStar6;
    var __importDefault6;
    var __classPrivateFieldGet6;
    var __classPrivateFieldSet6;
    var __classPrivateFieldIn2;
    var __createBinding6;
    (function(factory) {
      var root2 = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports3) {
          factory(createExporter(root2, createExporter(exports3)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports3, previous) {
        if (exports3 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports3, "__esModule", { value: true });
          } else {
            exports3.__esModule = true;
          }
        }
        return function(id, v) {
          return exports3[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d[p] = b2[p];
      };
      __extends6 = function(d, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest6 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate6 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param6 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata6 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter6 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator6 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar6 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding6(o, m, p);
      };
      __createBinding6 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values6 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read6 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread6 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read6(arguments[i]));
        return ar;
      };
      __spreadArrays6 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __spreadArray2 = function(to, from2, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from2.length, ar; i < l; i++) {
            if (ar || !(i in from2)) {
              if (!ar)
                ar = Array.prototype.slice.call(from2, 0, i);
              ar[i] = from2[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from2));
      };
      __await6 = function(v) {
        return this instanceof __await6 ? (this.v = v, this) : new __await6(v);
      };
      __asyncGenerator6 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator6 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await6(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues6 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values6 === "function" ? __values6(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject6 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar6 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding6(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault6 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet6 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends6);
      exporter("__assign", __assign7);
      exporter("__rest", __rest6);
      exporter("__decorate", __decorate6);
      exporter("__param", __param6);
      exporter("__metadata", __metadata6);
      exporter("__awaiter", __awaiter6);
      exporter("__generator", __generator6);
      exporter("__exportStar", __exportStar6);
      exporter("__createBinding", __createBinding6);
      exporter("__values", __values6);
      exporter("__read", __read6);
      exporter("__spread", __spread6);
      exporter("__spreadArrays", __spreadArrays6);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await6);
      exporter("__asyncGenerator", __asyncGenerator6);
      exporter("__asyncDelegator", __asyncDelegator6);
      exporter("__asyncValues", __asyncValues6);
      exporter("__makeTemplateObject", __makeTemplateObject6);
      exporter("__importStar", __importStar6);
      exporter("__importDefault", __importDefault6);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet6);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet6);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// browser-route-module:/Users/mitch/code/vbvf/app/routes/$.jsx?browser
init_react();

// app/routes/$.jsx
init_react();

// app/old-app/App.js
init_react();
var import_react73 = __toESM(require_react());
init_react_router_dom();

// app/old-app/components/footer.js
init_react();
var import_react = __toESM(require_react());

// app/old-app/images/logos/facebook_logo.png
var facebook_logo_default = "/build/_assets/facebook_logo-5S555JNR.png";

// app/old-app/images/logos/instagram_logo.png
var instagram_logo_default = "/build/_assets/instagram_logo-7TY5PISJ.png";

// app/old-app/components/footer.js
var Footer = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "footer"
  }, /* @__PURE__ */ import_react.default.createElement("p", null, "Follow VBVF Online"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "footer-icons"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.facebook.com/vbvfellowship/"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: facebook_logo_default,
    alt: "Facebook Logo"
  })), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/versebyversefellowship/"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: instagram_logo_default,
    alt: "Instagram Logo"
  }))), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "footer-disclosures"
  }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(Link, {
    to: "/privacy-policy"
  }, "Privacy Policy")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement(Link, {
    to: "/terms-and-conditions"
  }, "Terms and Conditions"))), /* @__PURE__ */ import_react.default.createElement("p", {
    className: "footer-copyright"
  }, "\xA9 ", new Date().getFullYear(), " Verse By Verse Fellowship"), useLocation().pathname === "/" && /* @__PURE__ */ import_react.default.createElement("a", {
    id: "sanity-link",
    href: "https://www.sanity.io"
  }, "Structured content powered by Sanity.io"));
};
var footer_default = Footer;

// app/old-app/pages/connect-page.js
init_react();
var import_react4 = __toESM(require_react());

// app/old-app/images/connect/attending_meeting.jpg
var attending_meeting_default = "/build/_assets/attending_meeting-NOGTNEJQ.jpg";

// app/old-app/images/connect/Iphones.png
var Iphones_default = "/build/_assets/Iphones-A6APX754.png";

// app/old-app/components/connection-steps.js
init_react();
var import_react3 = __toESM(require_react());
function ConnectionStep(props) {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "step-container"
  }, /* @__PURE__ */ import_react3.default.createElement("p", null, props.copy), /* @__PURE__ */ import_react3.default.createElement(button_default, {
    size: "medium",
    color: "green",
    title: props.buttonText,
    link: props.link
  }));
}

// app/old-app/pages/connect-page.js
var ConnectPage = () => {
  const appStoreLink = () => {
    if (getMobileOperatingSystem() === "iOS") {
      return "https://apps.apple.com/us/app/church-center-app/id1357742931";
    } else if (getMobileOperatingSystem() === "Android") {
      return "https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&hl=en_US";
    } else {
      return "https://vbvf.churchcenter.com/home";
    }
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "connect-container"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    id: "connect-header"
  }), /* @__PURE__ */ import_react4.default.createElement("h1", null, "Connect Here."), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "first-row"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "connection-meeting"
  }, /* @__PURE__ */ import_react4.default.createElement("h2", null, "Connection Meeting"), /* @__PURE__ */ import_react4.default.createElement("p", null, "We love seeing so many new faces at VBVF and would love to meet you! Come to one of the Connection Meetings immediately after worship service on the last Sunday of every month. We will meet you in the flex room for a quick informational gathering to learn more about VBVF. One of our pastors will give a quick overview of all the great things happening at VBVF and answer any questions you might have."), /* @__PURE__ */ import_react4.default.createElement(ConnectionStep, {
    copy: " We would love to contact you. Please submit a connection card using\n            the button below.",
    link: "https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true",
    buttonText: "Connection Card"
  })), /* @__PURE__ */ import_react4.default.createElement("img", {
    src: attending_meeting_default,
    alt: "vbvf member in connection meeting"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "church-center-row"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "church-center-row-title-button"
  }, /* @__PURE__ */ import_react4.default.createElement("h3", null, "Start connecting now"), /* @__PURE__ */ import_react4.default.createElement("p", null, "Check out the church center app to find out what's going on at VBVF. Browse events, explore small groups and more!", " "), /* @__PURE__ */ import_react4.default.createElement(button_default, {
    title: "Get Church Center",
    size: "medium",
    color: "green",
    link: appStoreLink()
  })), /* @__PURE__ */ import_react4.default.createElement("img", {
    src: Iphones_default,
    alt: ""
  })));
};
var connect_page_default = ConnectPage;

// app/old-app/pages/study-aggregator.js
init_react();
var import_react5 = __toESM(require_react());
function StudyAggregator() {
  const query = `*[_type == "series" && !isVbvmiStudy] | order(endDate desc) {
    title,
    seriesImage,
    endDate,
    
  }`;
  const [series, setSeries] = (0, import_react5.useState)([]);
  const [isSeriesLoading, setIsSeriesLoading] = (0, import_react5.useState)(true);
  (0, import_react5.useEffect)(() => {
    sanity.fetch(query).then((results) => {
      setSeries(results);
      setIsSeriesLoading(false);
    });
  }, [query]);
  const studies = series.map((study) => /* @__PURE__ */ import_react5.default.createElement(Link, {
    key: study.title,
    className: "study-link",
    to: `${study.title.replace(" ", "-")}`
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: `study-icon `
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: `indicator-${!isOver(study?.endDate) ? "active" : "hidden"}`
  }, "Active Series"), /* @__PURE__ */ import_react5.default.createElement("img", {
    src: sanityUrlFor(study.seriesImage).width(400).url(),
    alt: ""
  }), /* @__PURE__ */ import_react5.default.createElement("h3", null, study.title))));
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "studies"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "studies-desc"
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "Bible Teaching"), /* @__PURE__ */ import_react5.default.createElement(AlertBubble, null), /* @__PURE__ */ import_react5.default.createElement("p", null, "Verse by Verse Fellowship prioritizes the teaching of the word. We believe that God uses His word to equip followers of Christ to walk in confidence and love. Please enjoy these teaching series from teachers here at VBVF. If you would like to listen to more Bible teaching, please visit our sister ministry,", " ", /* @__PURE__ */ import_react5.default.createElement(Link, {
    target: "blank",
    rel: "noopener noreferrer",
    to: "/sermon-redirect"
  }, "Verse by Verse Ministry"), ".")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "studies-array"
  }, isSeriesLoading ? /* @__PURE__ */ import_react5.default.createElement(Spinner_default, null) : studies));
}

// app/old-app/pages/sermon-redirect.js
init_react();
var import_react7 = __toESM(require_react());

// app/old-app/images/logos/vbvf_logo_full.png
var vbvf_logo_full_default = "/build/_assets/vbvf_logo_full-MHCE5RMM.png";

// app/old-app/images/logos/vbvmi_logo.png
var vbvmi_logo_default = "/build/_assets/vbvmi_logo-NEISJWBF.png";

// app/old-app/images/arrow-thick-right.svg
var arrow_thick_right_default = "/build/_assets/arrow-thick-right-4U55BTY6.svg";

// app/old-app/pages/sermon-redirect.js
var SermonRedirect = (props) => {
  const [counter, setCounter] = (0, import_react7.useState)("10");
  const navigate = useNavigate(-1);
  (0, import_react7.useEffect)(() => {
    counter >= 1 ? setTimeout(() => {
      setCounter(counter - 1);
    }, 1e3) : verseByVerseRedirect("https://www.versebyverseministry.org/");
  }, [counter]);
  function verseByVerseRedirect() {
    window.location.replace(`https://www.versebyverseministry.org/`);
  }
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "redirect"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "redirect-desc"
  }, /* @__PURE__ */ import_react7.default.createElement("h1", null, "You are now leaving Verse by Verse Fellowship"), /* @__PURE__ */ import_react7.default.createElement("p", null, "You're being transferred to Verse by Verse Ministry's website. Please click the cancel button below if you would like to stay here.")), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "redirect-buttons"
  }, /* @__PURE__ */ import_react7.default.createElement(button_default, {
    size: "large",
    color: "red",
    buttonFunc: () => navigate(-1),
    title: "Stay Here"
  }), /* @__PURE__ */ import_react7.default.createElement(button_default, {
    size: "large",
    color: "green",
    buttonFunc: () => verseByVerseRedirect(),
    title: "Proceed"
  })), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "redirect-images"
  }, /* @__PURE__ */ import_react7.default.createElement("img", {
    alt: "",
    src: vbvf_logo_full_default
  }), /* @__PURE__ */ import_react7.default.createElement("img", {
    id: "arrow",
    alt: "",
    src: arrow_thick_right_default
  }), /* @__PURE__ */ import_react7.default.createElement("img", {
    alt: "",
    src: vbvmi_logo_default
  })));
};
var sermon_redirect_default = SermonRedirect;

// app/old-app/pages/registration-redirect.js
init_react();
var import_react9 = __toESM(require_react());

// app/old-app/images/logos/registrations_logo.png
var registrations_logo_default = "/build/_assets/registrations_logo-CKU3JFUX.png";

// app/old-app/pages/registration-redirect.js
var RegistrationRedirect = (props) => {
  const [counter, setCounter] = (0, import_react9.useState)("10");
  const navigate = useNavigate();
  (0, import_react9.useEffect)(() => {
    counter >= 1 ? setTimeout(() => {
      setCounter(counter - 1);
    }, 1e3) : redirect();
  }, [counter]);
  function redirect(path) {
    window.location.replace(`https://vbvf.churchcenter.com/registrations/events`);
  }
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "redirect"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "redirect-desc"
  }, /* @__PURE__ */ import_react9.default.createElement("h1", null, "You are now leaving Verse by Verse Fellowship"), /* @__PURE__ */ import_react9.default.createElement("p", null, "You're being transferred to our event portal. When you're finished, you may hit the back button to come back to Verse by Verse Fellowship's site. Please click the cancel button below if you would like to stay here.")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "redirect-buttons"
  }, /* @__PURE__ */ import_react9.default.createElement(button_default, {
    size: "large",
    color: "red",
    buttonFunc: () => navigate(-1),
    title: "Stay Here"
  }), " ", /* @__PURE__ */ import_react9.default.createElement(button_default, {
    size: "large",
    color: "green",
    buttonFunc: () => redirect(),
    title: "Proceed"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "redirect-images"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    alt: "Verse by Verse Fellowship Logo",
    src: vbvf_logo_full_default
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    id: "arrow",
    alt: "",
    src: arrow_thick_right_default
  }), /* @__PURE__ */ import_react9.default.createElement("img", {
    alt: "Planning Center Registrations Logo",
    src: registrations_logo_default
  })));
};
var registration_redirect_default = RegistrationRedirect;

// app/old-app/pages/giving-redirect.js
init_react();
var import_react11 = __toESM(require_react());

// app/old-app/images/logos/giving_logo.png
var giving_logo_default = "/build/_assets/giving_logo-POCLCY2A.png";

// app/old-app/pages/giving-redirect.js
var GivingRedirect = (props) => {
  const [counter, setCounter] = (0, import_react11.useState)("10");
  const navigate = useNavigate();
  (0, import_react11.useEffect)(() => {
    counter >= 1 ? setTimeout(() => {
      setCounter(counter - 1);
    }, 1e3) : givingRedirect("https://vbvf.churchcenter.com/giving");
  }, [counter]);
  function givingRedirect(path) {
    window.location.replace(`https://vbvf.churchcenter.com/giving`);
  }
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "redirect"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "redirect-desc"
  }, /* @__PURE__ */ import_react11.default.createElement("h1", null, "You are now leaving Verse by Verse Fellowship"), /* @__PURE__ */ import_react11.default.createElement("p", null, "You're being transferred to our giving portal. When you're finished, you may hit the back button and come back to Verse by Verse Fellowship's site. Please click the cancel button below if you would like to stay here.")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "redirect-buttons"
  }, /* @__PURE__ */ import_react11.default.createElement(button_default, {
    size: "large",
    color: "bone",
    buttonFunc: () => navigate(-1),
    title: "Stay"
  }), " ", /* @__PURE__ */ import_react11.default.createElement(button_default, {
    color: "green",
    size: "large",
    title: "Proceed",
    buttonFunc: () => givingRedirect("https://vbvf.churchcenter.com/giving")
  })), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "redirect-images"
  }, /* @__PURE__ */ import_react11.default.createElement("img", {
    alt: "",
    src: vbvf_logo_full_default
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    id: "arrow",
    alt: "",
    src: arrow_thick_right_default
  }), /* @__PURE__ */ import_react11.default.createElement("img", {
    alt: "",
    src: giving_logo_default
  })));
};
var giving_redirect_default = GivingRedirect;

// app/old-app/components/privacy-policy.js
init_react();
var import_react13 = __toESM(require_react());
var PrivacyPolicy = () => {
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "disclosures"
  }, /* @__PURE__ */ import_react13.default.createElement("h1", null, "Privacy Policy"), /* @__PURE__ */ import_react13.default.createElement("p", null, "Verse By Verse Fellowship (VBVF) has created this Privacy Policy to explain why we collect particular information and how we will protect your personal privacy within our Web site. The following discloses our information gathering and dissemination practices for the website located at the URL https://www.vbvf.org and any related subdomains. In order to fully understand your rights we encourage you to read this Privacy Policy. VBVF reserves the right at any time and without notice to change this Privacy Policy simply by posting such changes on our Site. Any such change will be effective immediately upon posting. Because we want to demonstrate our commitment to your privacy, this Privacy Policy notifies you of", " "), /* @__PURE__ */ import_react13.default.createElement("ul", null, /* @__PURE__ */ import_react13.default.createElement("li", null, "What personally identifiable information of yours is collected through the Site;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "Who collects such information;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "How such information is used;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "With whom your information may be shared;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "What choices you ahve regarding collection, use and distribution of your information;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "Waht kind of security procedures are in place to protect the loss, misuse or alteration of infomration under our control;"), /* @__PURE__ */ import_react13.default.createElement("li", null, "How you can correct any innacuracies in you information;")), /* @__PURE__ */ import_react13.default.createElement("p", null, "Questions regarding this statement should be directed to VBVF by contacting us through our Contact page webform. Please reference this Privacy Policy in your submission."), /* @__PURE__ */ import_react13.default.createElement("h2", null, "WHAT INFORMATION WE COLLECT AND HOW WE USE THAT INFORMATION:"), /* @__PURE__ */ import_react13.default.createElement("p", null, "The information that we collect relates directly to the action being completed. Depending on the action, we may collect your name, email address, email format preference (HTML vs. Text), address, interests, and similar information. For financial transactions such as donations or store purchases, we will need to collect your credit card number."), /* @__PURE__ */ import_react13.default.createElement("p", null, "We use personal and financial information collected to deliver requested information or to complete the requested transaction and to maintain accurate financial records. We never sell, share or trade any of our customer information with other companies."), /* @__PURE__ */ import_react13.default.createElement("p", null, "Any transaction that can be completed online may also be completed via phone or mail instead, should you have concerns about security. Please see our contact page for information on reaching us by phone or mail."), /* @__PURE__ */ import_react13.default.createElement("h2", null, "CONTACT AND PROFILE INFORMATION:"), /* @__PURE__ */ import_react13.default.createElement("p", null, "VBVF is the sole owner of the information collected on the website. This site does not collect personally identifying information about users except when you specifically and knowingly provide it. For example, we collect information from you in the following ways:"), /* @__PURE__ */ import_react13.default.createElement("ul", null, /* @__PURE__ */ import_react13.default.createElement("li", null, "Some areas of our Site requet or require contact and other information."), /* @__PURE__ */ import_react13.default.createElement("li", null, "During the submission of a webform question, we request optional personal information such as your name, address, and email address.")), /* @__PURE__ */ import_react13.default.createElement("p", null, "Additionally, when making an online donation, we request certain personal financial information necessary to complete the transaction, however VBVF does not record or retain your credit card data used during the transaction. We collect the minimal necessary personal information to maintain a record of your donation for tax receipt purposes."), /* @__PURE__ */ import_react13.default.createElement("p", null, "VBVF VBVF acknowledges that EU individuals have the right to access the personal information that we maintain about them. A EU individual who seeks access, or who seeks to correct, amend, or delete inaccurate data, should ", /* @__PURE__ */ import_react13.default.createElement("a", {
    href: "mailto:info@vbvf.org"
  }, "email us."), " If requested to remove data, we will respond within a reasonable timeframe."), /* @__PURE__ */ import_react13.default.createElement("h2", null, "SECURITY"), /* @__PURE__ */ import_react13.default.createElement("p", null, "When making an online donation using your credit or debit card, your card information is transmitted using standard internet protocols, but unfortunately no data transmission over the Internet is 100% secure. While we strive to protect your information, we cannot ensure or warrant the security of such information. To increase the security of your transactions, please protect your usernames and passwords, be sure to log-out of the site when completing your transaction, and use a secure Internet connection when completing a financial transaction."), /* @__PURE__ */ import_react13.default.createElement("h2", null, "CHOICE/OPT OUT"), /* @__PURE__ */ import_react13.default.createElement("p", null, "VBVF only initiates communications with users who have subscribed to our mailing list. VBVF provides users with the opportunity to unsubscribe at any time by ", /* @__PURE__ */ import_react13.default.createElement("a", {
    href: "mailto:info@vbvf.org"
  }, "emailing us.")), /* @__PURE__ */ import_react13.default.createElement("h2", null, "CONTACTING THE WEBSITE"), /* @__PURE__ */ import_react13.default.createElement("p", null, "If If you have any questions about this Privacy Policy, the practices of this website, please contact us using the", " ", /* @__PURE__ */ import_react13.default.createElement(Link, {
    to: "/contact"
  }, "web form"), " provided on our Contact page or write us at:"));
};
var privacy_policy_default = PrivacyPolicy;

// app/old-app/components/terms-conditions.js
init_react();
var import_react15 = __toESM(require_react());
var TermsConditions = () => {
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "disclosures"
  }, /* @__PURE__ */ import_react15.default.createElement("h1", null, "Terms and Conditions"), /* @__PURE__ */ import_react15.default.createElement("h2", null, "Introduction"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner, Verse By Verse Fellowship (VBVF), including subsidiaries and affiliates (\u201CWebsite\u201D or \u201CWebsite Owner\u201D or \u201Cwe\u201D or \u201Cus\u201D or \u201Cour\u201D) provides the information contained on this website or any of the pages comprising the website (\u201Cwebsite\u201D) to visitors (\u201Cvisitors\u201D) (cumulatively referred to as \u201Cyou\u201D or \u201Cyour\u201D hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of this website. Your use of this website constitutes your agreement with these terms and conditions."), /* @__PURE__ */ import_react15.default.createElement("h2", null, "1. Content"), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.1 Information on the website"), /* @__PURE__ */ import_react15.default.createElement("p", null, "While every effort is made to update the information contained on this website, neither the Website Owner nor any third party or data or content provider make any representations or warranties, whether express, implied in law or residual, as to the sequence, accuracy, completeness or reliability of information, opinions, research information, data and/or content contained on the website (including but not limited to any information which may be provided by any third party or data or content providers) (\u201Cinformation\u201D) and shall not be bound in any manner by any information contained on the website. The Website Owner reserves the right at any time to change or discontinue without notice, any aspect or feature of this website. No information shall be construed as advice and information is offered for information purposes only and is not intended for counseling or other professional services. You rely on the information contained on this website at your own risk. If you find an error or omission at this site, please let us know."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.2 Trade Marks"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The trade marks, names, logos, text and audio files (collectively \u201Ctrade marks\u201D) displayed on or downloaded from this website are copyrighted works and/or registered and unregistered trade marks of the Website Owner. Nothing contained on this website should be construed as granting any licence or right to use any trade mark without the prior written permission of the Website Owner."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.3 External Links"), /* @__PURE__ */ import_react15.default.createElement("p", null, "External links may be provided for your convenience, but they are beyond the control of the Website Owner and no representation is made as to their content. Use or reliance on any external links and the content thereon provided is at your own risk. When visiting external links you must refer to that external websites terms and conditions of use. No hypertext links shall be created from any website controlled by you or otherwise to this website without the express prior written permission of the Website Owner. Please contact us if you would like to link to this website or would like to request a link to your website."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.4 Specific Use"), /* @__PURE__ */ import_react15.default.createElement("p", null, "You further agree not to use the website to send or post any message or material that is unlawful, harassing, defamatory, abusive, indecent, threatening, harmful, vulgar, obscene, sexually orientated, racially offensive, profane, pornographic or violates any applicable law and you hereby indemnify the Website Owner against any loss, liability, damage or expense of whatever nature which the Website Owner or any third party may suffer which is caused by or attributable to, whether directly or indirectly, your use of the website to send or post any such message or material."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.5 Warranties"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner makes no warranties, representations, statements or guarantees (whether express, implied in law or residual) regarding the website, the information contained on the website, your or your company\u2019s personal information or material and information transmitted over our system."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.6 Disclaimer of Liability"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner shall not be responsible for and disclaims all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party (including your company), as a result of or which may be attributable, directly or indirectly, to your access and use of the website, any information contained on the website, your or your company\u2019s personal information or material and information transmitted over our system. In particular, neither the Website Owner nor any third party or data or content provider shall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoever arising from any delays, inaccuracies, errors in, or omission of any information or the transmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason of non-performance or interruption, or termination thereof."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "1.7 Use of the website"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner does not make any warranty or representation that information on the website is appropriate for use in any jurisdiction (other than the United States). By accessing the website, you warrant and represent to the Website Owner that you are legally entitled to do so and to make use of information made available via the website."), /* @__PURE__ */ import_react15.default.createElement("h2", null, "General"), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.1 Entire Agreement"), /* @__PURE__ */ import_react15.default.createElement("p", null, "These website terms and conditions constitute the sole record of the agreement between you and the Website Owner in relation to your use of the website. Neither you nor the Website Owner shall be bound by any express tacit or implied representation, warranty, promise or the like not recorded herein. Unless otherwise specifically stated these website terms and conditions supersede and replace all prior commitments, undertakings or representations, whether written or oral, between you and the Website Owner in respect of your use of the website."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.2 Alteration"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner may at any time modify any relevant terms and conditions, policies or notices. You acknowledge that by visiting the website from time to time, you shall become bound to the current version of the relevant terms and conditions (the \u201Ccurrent version\u201D) and, unless stated in the current version, all previous versions shall be superseded by the current version. You shall be responsible for reviewing the then current version each time you visit the website."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.3 Conflict"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Where any conflict or contradiction appears between the provisions of these website terms and conditions and any other relevant terms and conditions, policies or notices, the other relevant terms and conditions, policies or notices which relate specifically to a particular section or module of the website shall prevail in respect of your use of the relevant section or module of the website."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.4 Waiver"), /* @__PURE__ */ import_react15.default.createElement("p", null, "No indulgence or extension of time which either you or the Website Owner may grant to the other will constitute a waiver of or, whether by estoppel or otherwise, limit any of the existing or future rights of the grantor in terms hereof, save in the event or to the extent that the grantor has signed a written document expressly waiving or limiting such rights."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.5 Cession"), /* @__PURE__ */ import_react15.default.createElement("p", null, "The Website Owner shall be entitled to cede, assign and delegate all or any of its rights and obligations in terms of any relevant terms and conditions, policies and notices to any third party."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.6 Severability"), /* @__PURE__ */ import_react15.default.createElement("p", null, "All provisions of any relevant terms and conditions, policies and notices are, notwithstanding the manner in which they have been grouped together or linked grammatically, severable from each other. Any provision of any relevant terms and conditions, policies and notices, which is or becomes unenforceable in any jurisdiction, whether due to voidness, invalidity, illegality, unlawfulness or for any reason whatever, shall, in such jurisdiction only and only to the extent that it is so unenforceable, be treated as pro non scripto and the remaining provisions of any relevant terms and conditions, policies and notices shall remain in full force and effect"), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.7 Applicable Laws"), /* @__PURE__ */ import_react15.default.createElement("p", null, "Any relevant terms and conditions, policies and notices shall be governed by and construed in accordance with the laws of the state of Texas without giving effect to any principles of conflict of law. You hereby consent to the exclusive jurisdiction of the state of Texas in respect of any disputes arising in connection with the website, or any relevant terms and conditions, policies and notices or any matter related to or in connection therewith."), /* @__PURE__ */ import_react15.default.createElement("h3", null, "2.8 Comments or Questions"), /* @__PURE__ */ import_react15.default.createElement("p", null, "If you have any questions, comments or concerns arising from the website, the privacy policy or any other relevant terms and conditions, policies and notices or the way in which we are handling your personal information please", " ", /* @__PURE__ */ import_react15.default.createElement("a", {
    className: "contact-link",
    href: "mailto:info@vbvf.org"
  }, "contact us.")));
};
var terms_conditions_default = TermsConditions;

// app/old-app/pages/notfound.js
init_react();
var import_react16 = __toESM(require_react());
var NotFound = () => {
  return /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "not-found"
  }, /* @__PURE__ */ import_react16.default.createElement("h1", null, "404"), /* @__PURE__ */ import_react16.default.createElement("h3", null, "This means that we couldn't find what you're looking for. Sorry about that."), /* @__PURE__ */ import_react16.default.createElement("p", null, "These are some of the most popular pages on our site, maybe you were looking for one of these?"), /* @__PURE__ */ import_react16.default.createElement("ul", null, /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement(Link, {
    to: "/bible-studies/"
  }, "Bible study media")), /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement(Link, {
    to: "about/faq"
  }, "FAQ")), /* @__PURE__ */ import_react16.default.createElement("li", null, /* @__PURE__ */ import_react16.default.createElement(Link, {
    to: "/livestream"
  }, "Livestream"))));
};
var notfound_default = NotFound;

// app/old-app/components/global-nav.js
init_react();
var import_react18 = __toESM(require_react());

// app/old-app/images/logos/vbvf_logo.png
var vbvf_logo_default = "/build/_assets/vbvf_logo-AWWKIHJJ.png";

// app/old-app/components/global-nav.js
var GlobalNav = (props) => {
  console.log("global nav is rendering");
  const [isOpen, setIsOpen] = (0, import_react18.useState)(false);
  const [modal, setModal] = (0, import_react18.useState)(false);
  const toggle = () => setIsOpen(!isOpen);
  const modalToggle = () => setModal(!modal);
  const dualToggle = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    setModal(!modal);
  };
  return /* @__PURE__ */ import_react18.default.createElement("div", null, /* @__PURE__ */ import_react18.default.createElement(Navbar_default, {
    className: "menu-bar",
    color: "light",
    light: true,
    expand: "lg"
  }, /* @__PURE__ */ import_react18.default.createElement(NavbarBrand_default, {
    href: "/"
  }, /* @__PURE__ */ import_react18.default.createElement("img", {
    src: vbvf_logo_default,
    alt: "VBVF Logo"
  })), /* @__PURE__ */ import_react18.default.createElement(NavbarToggler_default, {
    onClick: toggle
  }), /* @__PURE__ */ import_react18.default.createElement(Collapse_default, {
    isOpen,
    navbar: true
  }, /* @__PURE__ */ import_react18.default.createElement(Nav_default, {
    className: "ml-auto",
    navbar: true
  }, /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "#",
    onClick: modalToggle
  }, "Service Times & Directions"), /* @__PURE__ */ import_react18.default.createElement(Modal_default, {
    isOpen: modal,
    toggle: modalToggle
  }, /* @__PURE__ */ import_react18.default.createElement(ModalHeader_default, {
    toggle: modalToggle
  }, "Service Times & Directions"), /* @__PURE__ */ import_react18.default.createElement(ModalBody_default, null, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "service-time-modal"
  }, /* @__PURE__ */ import_react18.default.createElement("div", null, /* @__PURE__ */ import_react18.default.createElement("h2", null, "Weekend Services"), /* @__PURE__ */ import_react18.default.createElement("p", null, "Sunday 9:00am & 11:00am")), /* @__PURE__ */ import_react18.default.createElement("div", null, /* @__PURE__ */ import_react18.default.createElement("h2", null, "Mid-Week Bible Studies"), /* @__PURE__ */ import_react18.default.createElement("p", null, "Adult Study ", /* @__PURE__ */ import_react18.default.createElement("br", null), "Wednesday - 7:00pm"), /* @__PURE__ */ import_react18.default.createElement("p", null, "Women's Study ", /* @__PURE__ */ import_react18.default.createElement("br", null), " Tuesday - 10:00am")), /* @__PURE__ */ import_react18.default.createElement("div", null, /* @__PURE__ */ import_react18.default.createElement("h2", null, "Location"), /* @__PURE__ */ import_react18.default.createElement("p", null, "551 E Nakoma St. San Antonio, TX 78216"), /* @__PURE__ */ import_react18.default.createElement(button_default, {
    size: "medium",
    title: "Open in Maps",
    color: "green",
    buttonFunc: () => {
      getMobileOperatingSystem() === "iOS" ? window.open("http://maps.apple.com/?q=Verse+By+Verse+Fellowship") : window.open("https://www.google.com/maps/dir/?api=1&destination=Verse+by+verse+fellowship");
    }
  }), /* @__PURE__ */ import_react18.default.createElement("p", {
    className: "contact-page-link"
  }, "Looking for our ", /* @__PURE__ */ import_react18.default.createElement("strong", null, "mailing address?"), " Check out our", " ", /* @__PURE__ */ import_react18.default.createElement(Link, {
    onClick: dualToggle,
    to: "/contact"
  }, "Contact Page"))))), /* @__PURE__ */ import_react18.default.createElement(ModalFooter_default, null, /* @__PURE__ */ import_react18.default.createElement(button_default, {
    size: "medium",
    color: "green",
    buttonFunc: modalToggle,
    title: "Close"
  })))), /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "/about/faq"
  }, "About")), /* @__PURE__ */ import_react18.default.createElement(UncontrolledDropdown, {
    nav: true,
    inNavbar: true
  }, /* @__PURE__ */ import_react18.default.createElement(DropdownToggle_default, {
    nav: true,
    caret: true
  }, "Ministries"), /* @__PURE__ */ import_react18.default.createElement(DropdownMenu_default, {
    right: true
  }, /* @__PURE__ */ import_react18.default.createElement(DropdownItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    className: "sub-menu",
    href: "/ministries/childrens-ministry"
  }, "Children's Ministry")), /* @__PURE__ */ import_react18.default.createElement(DropdownItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    className: "sub-menu",
    href: "/ministries/youth-ministry"
  }, "Youth Ministry"))), /* @__PURE__ */ import_react18.default.createElement(DropdownItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    className: "sub-menu",
    href: "/ministries/small-groups"
  }, "Small Groups")), /* @__PURE__ */ import_react18.default.createElement(DropdownItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    className: "sub-menu",
    href: "/ministries/serve"
  }, "Serving at VBVF")), /* @__PURE__ */ import_react18.default.createElement(DropdownItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    className: "sub-menu",
    href: "/ministries/care-ministry"
  }, "Care Ministry")))), /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "/registration-redirect"
  }, "Events")), /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "/bible-studies"
  }, "Bible Teaching")), /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "/giving"
  }, "Give")), /* @__PURE__ */ import_react18.default.createElement(NavItem_default, null, /* @__PURE__ */ import_react18.default.createElement(NavLink_default, {
    href: "/contact"
  }, "Contact"))))));
};
var global_nav_default = GlobalNav;

// app/old-app/pages/childrens-ministry.js
init_react();
var import_react23 = __toESM(require_react());
var import_block_content_to_react2 = __toESM(require_BlockContent());

// app/old-app/images/logos/journey-logo.png
var journey_logo_default = "/build/_assets/journey-logo-6SRHX7PO.png";

// app/old-app/images/childrens_ministry/sofi_jon_bts.jpg
var sofi_jon_bts_default = "/build/_assets/sofi_jon_bts-6ICGG3H2.jpg";

// app/old-app/components/scripture-verse.js
init_react();
var import_react20 = __toESM(require_react());
var import_block_content_to_react = __toESM(require_BlockContent());
function ScriptureVerse(props) {
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react20.default.createElement("a", {
          href
        }, children);
      },
      list: (props2) => {
        const { type } = props2;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react20.default.createElement("ul", null, props2.children);
        }
        return /* @__PURE__ */ import_react20.default.createElement("ol", null, props2.children);
      },
      listItem: (props2) => /* @__PURE__ */ import_react20.default.createElement("li", null, props2.children)
    }
  };
  return /* @__PURE__ */ import_react20.default.createElement("div", {
    className: "scripture"
  }, /* @__PURE__ */ import_react20.default.createElement(import_block_content_to_react.default, {
    renderContainerOnSingleChild: true,
    className: "scripture-verse",
    blocks: props.verse,
    serializers
  }), /* @__PURE__ */ import_react20.default.createElement("h3", {
    className: "scripture-reference"
  }, props.reference));
}

// app/old-app/components/staff-info.js
init_react();
var import_react22 = __toESM(require_react());

// app/old-app/components/staff-card.js
init_react();
var import_react21 = __toESM(require_react());
var StaffCard = (props) => {
  return /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement(Card_default, {
    body: true,
    className: "text-center"
  }, /* @__PURE__ */ import_react21.default.createElement(CardImg_default, {
    top: true,
    width: "60%",
    src: props.image,
    alt: "Card image cap"
  }), /* @__PURE__ */ import_react21.default.createElement(CardBody_default, null, /* @__PURE__ */ import_react21.default.createElement(CardTitle_default, null, props.title), /* @__PURE__ */ import_react21.default.createElement(CardSubtitle_default, null, props.subtitle), /* @__PURE__ */ import_react21.default.createElement(CardText_default, null, props.content), /* @__PURE__ */ import_react21.default.createElement(Button_default, {
    href: `mailto:${props.email}`
  }, "Contact ", props.title.split(" ")[0]))));
};
var staff_card_default = StaffCard;

// app/old-app/components/staff-info.js
function StaffInfo(props) {
  return /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "staff-info-container"
  }, /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "staff-card"
  }, /* @__PURE__ */ import_react22.default.createElement(staff_card_default, {
    title: props.name,
    subtitle: props.role,
    email: props.email,
    image: props.image
  })), /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "staff-info"
  }, /* @__PURE__ */ import_react22.default.createElement("h2", null, "Meet ", props.name.split(" ")[0]), /* @__PURE__ */ import_react22.default.createElement("p", null, props.bio)));
}

// app/old-app/pages/childrens-ministry.js
function ChildrensMinistry() {
  const query = `*[_type == "page" && title == "Children's Ministry"]{
    paragraphs,
    scripture,
    ministryLeader->
  }`;
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react23.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react23.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react23.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react23.default.createElement("li", null, props.children)
    }
  };
  const [pageData, setPageData] = (0, import_react23.useState)([]);
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react23.useState)(true);
  (0, import_react23.useEffect)(() => {
    sanity.fetch(query).then((result) => {
      setPageData(result[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "childrens-ministry"
  }, /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "childrens-ministry-header"
  }, /* @__PURE__ */ import_react23.default.createElement("img", {
    className: "childrens-ministry-header-logo",
    alt: "Journey Kids Logo",
    src: journey_logo_default
  }), /* @__PURE__ */ import_react23.default.createElement(AlertBubble, null)), /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "childrens-ministry-mission"
  }, pageDataIsLoading ? /* @__PURE__ */ import_react23.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(import_block_content_to_react2.default, {
    className: "childrens-ministry-mission-paragraph",
    renderContainerOnSingleChild: true,
    blocks: pageData?.paragraphs[0].bodyText,
    serializers
  }), /* @__PURE__ */ import_react23.default.createElement(ScriptureVerse, {
    verse: pageData.scripture.verseText,
    reference: pageData.scripture.reference
  }))), /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "childrens-ministry-materials"
  }, /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "button-container"
  }, /* @__PURE__ */ import_react23.default.createElement("h2", null, "Biblically grounded", /* @__PURE__ */ import_react23.default.createElement("br", null), " childrens' material"), /* @__PURE__ */ import_react23.default.createElement("p", null, "New videos and activities every week"), /* @__PURE__ */ import_react23.default.createElement(button_default, {
    size: "medium",
    title: "View resources",
    color: "green",
    buttonFunc: () => {
      window.open("/childrens-content");
    }
  })), /* @__PURE__ */ import_react23.default.createElement("img", {
    alt: "ministry leaders filming content",
    src: sofi_jon_bts_default
  })), /* @__PURE__ */ import_react23.default.createElement("div", {
    className: "childrens-ministry-sign-up"
  }, /* @__PURE__ */ import_react23.default.createElement("h4", null, "Join our email list to receive notifications about new children's learning materials, events and other announcements."), /* @__PURE__ */ import_react23.default.createElement(button_default, {
    size: "large",
    title: "Sign me up",
    color: "green",
    buttonFunc: () => {
      window.location.href = "https://vbvf.churchcenter.com/people/forms/118844?open-in-church-center-modal=true";
    }
  })), pageDataIsLoading ? /* @__PURE__ */ import_react23.default.createElement(Spinner_default, null) : pageData.ministryLeader !== void 0 ? /* @__PURE__ */ import_react23.default.createElement(StaffInfo, {
    name: pageData?.ministryLeader.name,
    role: pageData?.ministryLeader.role,
    email: pageData?.ministryLeader.email,
    bio: pageData?.ministryLeader.bio,
    image: sanityUrlFor(pageData?.ministryLeader.image).width(500).url(),
    alt: ""
  }) : null);
}

// app/old-app/pages/youth-ministry.js
init_react();
var import_react25 = __toESM(require_react());

// app/old-app/images/logos/logos-logo.png
var logos_logo_default = "/build/_assets/logos-logo-CIJLLVQJ.png";

// app/old-app/images/youth_assets/volunteer_youth.jpg
var volunteer_youth_default = "/build/_assets/volunteer_youth-MXBROJVD.jpg";

// app/old-app/pages/youth-ministry.js
var import_block_content_to_react4 = __toESM(require_BlockContent());
var import_Spinner = __toESM(require_Spinner());

// app/old-app/components/frequently-asked-questions.js
init_react();
var import_react24 = __toESM(require_react());
var import_block_content_to_react3 = __toESM(require_BlockContent());
function FrequentlyAskedQuestions(props) {
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react24.default.createElement("a", {
          href
        }, children);
      }
    }
  };
  const faqList = props.faq?.map((question) => /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "faq-list-item"
  }, /* @__PURE__ */ import_react24.default.createElement("h3", null, question.question), /* @__PURE__ */ import_react24.default.createElement("p", null, /* @__PURE__ */ import_react24.default.createElement(import_block_content_to_react3.default, {
    blocks: question.answer2,
    serializers
  }))));
  return /* @__PURE__ */ import_react24.default.createElement("div", {
    className: `faq-list ${props.layout}`
  }, faqList);
}

// app/old-app/pages/youth-ministry.js
function YouthMinistry() {
  const query = `*[_type == "page" && title == "Youth Ministry"]{
    paragraphs,
    scripture,
    faq,
    ministryLeader->,
  }`;
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react25.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react25.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react25.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react25.default.createElement("li", null, props.children)
    }
  };
  const [pageData, setPageData] = (0, import_react25.useState)([]);
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react25.useState)(true);
  const [personIsLoading, setPersonIsLoading] = (0, import_react25.useState)(true);
  (0, import_react25.useEffect)(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
      setPersonIsLoading(!personIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "youth"
  }, /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "youth-header"
  }, /* @__PURE__ */ import_react25.default.createElement("img", {
    className: "youth-header-logo",
    src: logos_logo_default,
    alt: "Logos Student Ministry Logo"
  }), /* @__PURE__ */ import_react25.default.createElement(AlertBubble, null)), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "youth-description"
  }, pageDataIsLoading ? /* @__PURE__ */ import_react25.default.createElement(import_Spinner.default, null) : /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, /* @__PURE__ */ import_react25.default.createElement(ScriptureVerse, {
    verse: pageData.scripture.verseText[0],
    reference: pageData.scripture.reference
  }), /* @__PURE__ */ import_react25.default.createElement(import_block_content_to_react4.default, {
    renderContainerOnSingleChild: true,
    className: "youth-description-mission",
    blocks: pageData?.paragraphs[0].bodyText,
    serializers
  }))), /* @__PURE__ */ import_react25.default.createElement("h2", null, "Logos FAQ"), pageDataIsLoading ? /* @__PURE__ */ import_react25.default.createElement(import_Spinner.default, null) : /* @__PURE__ */ import_react25.default.createElement(FrequentlyAskedQuestions, {
    faq: pageData.faq.faqs,
    layout: "vertical"
  }), /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "youth-sign-up"
  }, /* @__PURE__ */ import_react25.default.createElement("img", {
    src: volunteer_youth_default,
    alt: ""
  }), /* @__PURE__ */ import_react25.default.createElement("div", null, /* @__PURE__ */ import_react25.default.createElement("h3", null, "Want to volunteer", /* @__PURE__ */ import_react25.default.createElement("br", null), " with student ministry?"), /* @__PURE__ */ import_react25.default.createElement(button_default, {
    color: "green",
    title: "Sign up here",
    size: "medium",
    link: "https://vbvf.churchcenter.com/people/forms/72047"
  }))), /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, personIsLoading ? /* @__PURE__ */ import_react25.default.createElement(import_Spinner.default, null) : pageData.ministryLeader !== void 0 ? /* @__PURE__ */ import_react25.default.createElement(StaffInfo, {
    name: pageData?.ministryLeader.name,
    role: pageData?.ministryLeader.role,
    email: pageData?.ministryLeader.email,
    bio: pageData?.ministryLeader.bio,
    image: sanityUrlFor(pageData?.ministryLeader.image).width(500).url(),
    alt: ""
  }) : null));
}

// app/old-app/pages/small-groups.js
init_react();
var import_react26 = __toESM(require_react());

// app/old-app/images/logos/small_group_logo.svg
var small_group_logo_default = "/build/_assets/small_group_logo-AB4H434G.svg";

// app/old-app/pages/small-groups.js
var import_block_content_to_react5 = __toESM(require_BlockContent());

// app/old-app/images/small_groups/praying.jpg
var praying_default = "/build/_assets/praying-MX7STSP4.jpg";

// app/old-app/pages/small-groups.js
function SmallGroups() {
  const query = `*[_type == "page" && title == "Small Groups"]{
    paragraphs,
    faq,
    ministryLeader->
  }`;
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react26.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react26.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react26.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react26.default.createElement("li", null, props.children)
    }
  };
  const [pageData, setPageData] = (0, import_react26.useState)([]);
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react26.useState)(true);
  (0, import_react26.useEffect)(() => {
    sanity.fetch(query).then((result) => {
      setPageData(result[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "small-group"
  }, /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "small-group-header"
  }, /* @__PURE__ */ import_react26.default.createElement("img", {
    alt: "",
    src: small_group_logo_default
  }), /* @__PURE__ */ import_react26.default.createElement("h1", null, "VBVF", /* @__PURE__ */ import_react26.default.createElement("br", null), " Small", /* @__PURE__ */ import_react26.default.createElement("br", null), " Groups")), /* @__PURE__ */ import_react26.default.createElement(AlertBubble, null), /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "small-group-info"
  }, pageDataIsLoading ? /* @__PURE__ */ import_react26.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react26.default.createElement(import_block_content_to_react5.default, {
    className: "small-group-info-paragraph",
    renderContainerOnSingleChild: true,
    blocks: pageData.paragraphs[0].bodyText,
    serializers
  }), /* @__PURE__ */ import_react26.default.createElement("img", {
    alt: "",
    src: praying_default
  })), /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "small-group-button-container"
  }, /* @__PURE__ */ import_react26.default.createElement(button_default, {
    color: "green",
    title: "Find a Small Group",
    size: "large",
    link: "https://vbvf.churchcenter.com/groups/small-groups"
  }), /* @__PURE__ */ import_react26.default.createElement(button_default, {
    color: "green",
    title: "Become a leader",
    size: "large",
    link: "https://vbvf.churchcenter.com/people/forms/185037"
  })), pageDataIsLoading ? /* @__PURE__ */ import_react26.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "small-group-faq"
  }, /* @__PURE__ */ import_react26.default.createElement(FrequentlyAskedQuestions, {
    faq: pageData?.faq.faqs,
    layout: "compact"
  })), /* @__PURE__ */ import_react26.default.createElement(StaffInfo, {
    name: pageData?.ministryLeader.name,
    role: pageData?.ministryLeader.role,
    email: pageData?.ministryLeader.email,
    image: sanityUrlFor(pageData?.ministryLeader.image).width(500).url(),
    alt: "",
    bio: pageData?.ministryLeader.bio
  })));
}

// app/old-app/pages/serve.js
init_react();
var import_react27 = __toESM(require_react());

// app/old-app/images/serve/ben_coffee.jpg
var ben_coffee_default = "/build/_assets/ben_coffee-4KL2O6MD.jpg";

// app/old-app/images/serve/cathy_greeting.jpg
var cathy_greeting_default = "/build/_assets/cathy_greeting-4PR3Q4ZW.jpg";

// app/old-app/images/serve/kids_ministry.jpg
var kids_ministry_default = "/build/_assets/kids_ministry-YA4HS7FO.jpg";

// app/old-app/images/serve/levi_setup.jpg
var levi_setup_default = "/build/_assets/levi_setup-OPVYU3YJ.jpg";

// app/old-app/images/serve/john_praying.jpg
var john_praying_default = "/build/_assets/john_praying-3LISSYNB.jpg";

// app/old-app/pages/serve.js
var import_block_content_to_react6 = __toESM(require_BlockContent());
function Serve() {
  const query = `*[_type == "page" && title == "Serve"]{
    paragraphs,
    scripture,
  }`;
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react27.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react27.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react27.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react27.default.createElement("li", null, props.children)
    }
  };
  const [pageData, setPageData] = (0, import_react27.useState)([]);
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react27.useState)(true);
  (0, import_react27.useEffect)(() => {
    sanity.fetch(query).then((result) => {
      setPageData(result[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "serve-container"
  }, /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "serve-photo-collage"
  }, /* @__PURE__ */ import_react27.default.createElement("div", {
    id: "top-row"
  }, /* @__PURE__ */ import_react27.default.createElement("img", {
    id: "kids",
    src: kids_ministry_default,
    alt: "serving at the coffee bar"
  }), /* @__PURE__ */ import_react27.default.createElement("img", {
    id: "ben",
    src: ben_coffee_default,
    alt: "serving at the coffee bar"
  })), /* @__PURE__ */ import_react27.default.createElement("div", {
    id: "bottom-row"
  }, /* @__PURE__ */ import_react27.default.createElement("div", {
    id: "title-block"
  }, /* @__PURE__ */ import_react27.default.createElement("h1", null, "Serve Together"), /* @__PURE__ */ import_react27.default.createElement("img", {
    id: "levi",
    src: levi_setup_default,
    alt: "serving at the coffee bar"
  })), /* @__PURE__ */ import_react27.default.createElement("img", {
    id: "cathy",
    src: cathy_greeting_default,
    alt: "serving at the coffee bar"
  }))), /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "serve-photo-collage-mobile"
  }, /* @__PURE__ */ import_react27.default.createElement("h1", null, "Serve Together")), pageDataIsLoading ? /* @__PURE__ */ import_react27.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "first-row"
  }, /* @__PURE__ */ import_react27.default.createElement(import_block_content_to_react6.default, {
    renderContainerOnSingleChild: true,
    className: "first-row-paragraph",
    blocks: pageData.paragraphs[0].bodyText,
    serializers
  }), /* @__PURE__ */ import_react27.default.createElement(ScriptureVerse, {
    verse: pageData.scripture.verseText[0],
    reference: pageData.scripture.reference
  })), /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "second-row"
  }, /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "button-section"
  }, /* @__PURE__ */ import_react27.default.createElement(import_block_content_to_react6.default, {
    renderContainerOnSingleChild: true,
    className: "second-row-paragraph",
    blocks: pageData?.paragraphs[1].bodyText,
    serializers
  }), /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "button-wrapper"
  }, /* @__PURE__ */ import_react27.default.createElement(button_default, {
    size: "large",
    color: "green",
    title: "Get Involved",
    link: "https://vbvf.churchcenter.com/people/forms/33404?open-in-church-center-modal=true"
  }))), /* @__PURE__ */ import_react27.default.createElement("img", {
    src: john_praying_default,
    alt: "volunteer praying with children"
  }))));
}

// app/old-app/pages/contact.js
init_react();
var import_react30 = __toESM(require_react());

// node_modules/formik/dist/formik.esm.js
init_react();
var import_react28 = __toESM(require_react());
var import_react_fast_compare = __toESM(require_react_fast_compare());

// node_modules/formik/node_modules/deepmerge/dist/es.js
init_react();
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var es_default = deepmerge_1;

// node_modules/lodash-es/isPlainObject.js
init_react();

// node_modules/lodash-es/_baseGetTag.js
init_react();

// node_modules/lodash-es/_Symbol.js
init_react();

// node_modules/lodash-es/_root.js
init_react();

// node_modules/lodash-es/_freeGlobal.js
init_react();
var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
init_react();
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
init_react();
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/_getPrototype.js
init_react();

// node_modules/lodash-es/_overArg.js
init_react();
function overArg(func2, transform2) {
  return function(arg) {
    return func2(transform2(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isObjectLike.js
init_react();
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isPlainObject.js
var objectTag = "[object Object]";
var funcProto = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto2 = getPrototype_default(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty2.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/clone.js
init_react();

// node_modules/lodash-es/_baseClone.js
init_react();

// node_modules/lodash-es/_Stack.js
init_react();

// node_modules/lodash-es/_ListCache.js
init_react();

// node_modules/lodash-es/_listCacheClear.js
init_react();
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_listCacheDelete.js
init_react();

// node_modules/lodash-es/_assocIndexOf.js
init_react();

// node_modules/lodash-es/eq.js
init_react();
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq_default(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index4 = assocIndexOf_default(data, key);
  if (index4 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index4 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index4, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
init_react();
function listCacheGet(key) {
  var data = this.__data__, index4 = assocIndexOf_default(data, key);
  return index4 < 0 ? void 0 : data[index4][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
init_react();
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
init_react();
function listCacheSet(key, value) {
  var data = this.__data__, index4 = assocIndexOf_default(data, key);
  if (index4 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index4][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index4 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index4 < length2) {
    var entry = entries[index4];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_stackClear.js
init_react();
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
init_react();
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
init_react();
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
init_react();
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
init_react();

// node_modules/lodash-es/_Map.js
init_react();

// node_modules/lodash-es/_getNative.js
init_react();

// node_modules/lodash-es/_baseIsNative.js
init_react();

// node_modules/lodash-es/isFunction.js
init_react();

// node_modules/lodash-es/isObject.js
init_react();
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_isMasked.js
init_react();

// node_modules/lodash-es/_coreJsData.js
init_react();
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func2) {
  return !!maskSrcKey && maskSrcKey in func2;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
init_react();
var funcProto2 = Function.prototype;
var funcToString2 = funcProto2.toString;
function toSource(func2) {
  if (func2 != null) {
    try {
      return funcToString2.call(func2);
    } catch (e) {
    }
    try {
      return func2 + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto3 = Function.prototype;
var objectProto4 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString3.call(hasOwnProperty3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
init_react();
function getValue(object3, key) {
  return object3 == null ? void 0 : object3[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object3, key) {
  var value = getValue_default(object3, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_MapCache.js
init_react();

// node_modules/lodash-es/_mapCacheClear.js
init_react();

// node_modules/lodash-es/_Hash.js
init_react();

// node_modules/lodash-es/_hashClear.js
init_react();

// node_modules/lodash-es/_nativeCreate.js
init_react();
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
init_react();
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
init_react();
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
init_react();
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
init_react();
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index4 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index4 < length2) {
    var entry = entries[index4];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_mapCacheDelete.js
init_react();

// node_modules/lodash-es/_getMapData.js
init_react();

// node_modules/lodash-es/_isKeyable.js
init_react();
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
init_react();
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
init_react();
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
init_react();
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index4 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index4 < length2) {
    var entry = entries[index4];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_arrayEach.js
init_react();
function arrayEach(array2, iteratee) {
  var index4 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index4 < length2) {
    if (iteratee(array2[index4], index4, array2) === false) {
      break;
    }
  }
  return array2;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_assignValue.js
init_react();

// node_modules/lodash-es/_baseAssignValue.js
init_react();

// node_modules/lodash-es/_defineProperty.js
init_react();
var defineProperty = function() {
  try {
    var func2 = getNative_default(Object, "defineProperty");
    func2({}, "", {});
    return func2;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object3, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object3, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object3[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/_assignValue.js
var objectProto7 = Object.prototype;
var hasOwnProperty6 = objectProto7.hasOwnProperty;
function assignValue(object3, key, value) {
  var objValue = object3[key];
  if (!(hasOwnProperty6.call(object3, key) && eq_default(objValue, value)) || value === void 0 && !(key in object3)) {
    baseAssignValue_default(object3, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_baseAssign.js
init_react();

// node_modules/lodash-es/_copyObject.js
init_react();
function copyObject(source, props, object3, customizer) {
  var isNew = !object3;
  object3 || (object3 = {});
  var index4 = -1, length2 = props.length;
  while (++index4 < length2) {
    var key = props[index4];
    var newValue = customizer ? customizer(object3[key], source[key], key, object3, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object3, key, newValue);
    } else {
      assignValue_default(object3, key, newValue);
    }
  }
  return object3;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/keys.js
init_react();

// node_modules/lodash-es/_arrayLikeKeys.js
init_react();

// node_modules/lodash-es/_baseTimes.js
init_react();
function baseTimes(n, iteratee) {
  var index4 = -1, result = Array(n);
  while (++index4 < n) {
    result[index4] = iteratee(index4);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/isArguments.js
init_react();

// node_modules/lodash-es/_baseIsArguments.js
init_react();
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto8 = Object.prototype;
var hasOwnProperty7 = objectProto8.hasOwnProperty;
var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty7.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/isArray.js
init_react();
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/isBuffer.js
init_react();

// node_modules/lodash-es/stubFalse.js
init_react();
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_isIndex.js
init_react();
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length2) {
  var type = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/isTypedArray.js
init_react();

// node_modules/lodash-es/_baseIsTypedArray.js
init_react();

// node_modules/lodash-es/isLength.js
init_react();
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag2 = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag2] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
init_react();
function baseUnary(func2) {
  return function(value) {
    return func2(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
init_react();
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty8 = objectProto9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType2 = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType2, result = skipIndexes ? baseTimes_default(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType2 && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_baseKeys.js
init_react();

// node_modules/lodash-es/_isPrototype.js
init_react();
var objectProto10 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto10;
  return value === proto2;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_nativeKeys.js
init_react();
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
function baseKeys(object3) {
  if (!isPrototype_default(object3)) {
    return nativeKeys_default(object3);
  }
  var result = [];
  for (var key in Object(object3)) {
    if (hasOwnProperty9.call(object3, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/isArrayLike.js
init_react();
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/keys.js
function keys(object3) {
  return isArrayLike_default(object3) ? arrayLikeKeys_default(object3) : baseKeys_default(object3);
}
var keys_default = keys;

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object3, source) {
  return object3 && copyObject_default(source, keys_default(source), object3);
}
var baseAssign_default = baseAssign;

// node_modules/lodash-es/_baseAssignIn.js
init_react();

// node_modules/lodash-es/keysIn.js
init_react();

// node_modules/lodash-es/_baseKeysIn.js
init_react();

// node_modules/lodash-es/_nativeKeysIn.js
init_react();
function nativeKeysIn(object3) {
  var result = [];
  if (object3 != null) {
    for (var key in Object(object3)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto12 = Object.prototype;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
function baseKeysIn(object3) {
  if (!isObject_default(object3)) {
    return nativeKeysIn_default(object3);
  }
  var isProto = isPrototype_default(object3), result = [];
  for (var key in object3) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty10.call(object3, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object3) {
  return isArrayLike_default(object3) ? arrayLikeKeys_default(object3, true) : baseKeysIn_default(object3);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object3, source) {
  return object3 && copyObject_default(source, keysIn_default(source), object3);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/lodash-es/_cloneBuffer.js
init_react();
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_copyArray.js
init_react();
function copyArray(source, array2) {
  var index4 = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index4 < length2) {
    array2[index4] = source[index4];
  }
  return array2;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_copySymbols.js
init_react();

// node_modules/lodash-es/_getSymbols.js
init_react();

// node_modules/lodash-es/_arrayFilter.js
init_react();
function arrayFilter(array2, predicate) {
  var index4 = -1, length2 = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index4 < length2) {
    var value = array2[index4];
    if (predicate(value, index4, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
init_react();
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto13 = Object.prototype;
var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object3) {
  if (object3 == null) {
    return [];
  }
  object3 = Object(object3);
  return arrayFilter_default(nativeGetSymbols(object3), function(symbol) {
    return propertyIsEnumerable2.call(object3, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object3) {
  return copyObject_default(source, getSymbols_default(source), object3);
}
var copySymbols_default = copySymbols;

// node_modules/lodash-es/_copySymbolsIn.js
init_react();

// node_modules/lodash-es/_getSymbolsIn.js
init_react();

// node_modules/lodash-es/_arrayPush.js
init_react();
function arrayPush(array2, values2) {
  var index4 = -1, length2 = values2.length, offset2 = array2.length;
  while (++index4 < length2) {
    array2[offset2 + index4] = values2[index4];
  }
  return array2;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object3) {
  var result = [];
  while (object3) {
    arrayPush_default(result, getSymbols_default(object3));
    object3 = getPrototype_default(object3);
  }
  return result;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object3) {
  return copyObject_default(source, getSymbolsIn_default(source), object3);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/lodash-es/_getAllKeys.js
init_react();

// node_modules/lodash-es/_baseGetAllKeys.js
init_react();
function baseGetAllKeys(object3, keysFunc, symbolsFunc) {
  var result = keysFunc(object3);
  return isArray_default(object3) ? result : arrayPush_default(result, symbolsFunc(object3));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object3) {
  return baseGetAllKeys_default(object3, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getAllKeysIn.js
init_react();
function getAllKeysIn(object3) {
  return baseGetAllKeys_default(object3, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/_getTag.js
init_react();

// node_modules/lodash-es/_DataView.js
init_react();
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
init_react();
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
init_react();
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/_WeakMap.js
init_react();
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_initCloneArray.js
init_react();
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function initCloneArray(array2) {
  var length2 = array2.length, result = new array2.constructor(length2);
  if (length2 && typeof array2[0] == "string" && hasOwnProperty11.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var initCloneArray_default = initCloneArray;

// node_modules/lodash-es/_initCloneByTag.js
init_react();

// node_modules/lodash-es/_cloneArrayBuffer.js
init_react();

// node_modules/lodash-es/_Uint8Array.js
init_react();
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneDataView.js
init_react();
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/lodash-es/_cloneRegExp.js
init_react();
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/lodash-es/_cloneSymbol.js
init_react();
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/lodash-es/_cloneTypedArray.js
init_react();
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object3, tag, isDeep) {
  var Ctor = object3.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object3);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object3);
    case dataViewTag3:
      return cloneDataView_default(object3, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object3, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object3);
    case regexpTag2:
      return cloneRegExp_default(object3);
    case setTag3:
      return new Ctor();
    case symbolTag:
      return cloneSymbol_default(object3);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/lodash-es/_initCloneObject.js
init_react();

// node_modules/lodash-es/_baseCreate.js
init_react();
var objectCreate = Object.create;
var baseCreate = function() {
  function object3() {
  }
  return function(proto2) {
    if (!isObject_default(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object3.prototype = proto2;
    var result = new object3();
    object3.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object3) {
  return typeof object3.constructor == "function" && !isPrototype_default(object3) ? baseCreate_default(getPrototype_default(object3)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/isMap.js
init_react();

// node_modules/lodash-es/_baseIsMap.js
init_react();
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/lodash-es/isSet.js
init_react();

// node_modules/lodash-es/_baseIsSet.js
init_react();
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag4 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag2 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object3, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object3 ? customizer(value, key, object3, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object3) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object3 ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var baseClone_default = baseClone;

// node_modules/lodash-es/clone.js
var CLONE_SYMBOLS_FLAG2 = 4;
function clone(value) {
  return baseClone_default(value, CLONE_SYMBOLS_FLAG2);
}
var clone_default = clone;

// node_modules/lodash-es/toPath.js
init_react();

// node_modules/lodash-es/_arrayMap.js
init_react();
function arrayMap(array2, iteratee) {
  var index4 = -1, length2 = array2 == null ? 0 : array2.length, result = Array(length2);
  while (++index4 < length2) {
    result[index4] = iteratee(array2[index4], index4, array2);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isSymbol.js
init_react();
var symbolTag3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag3;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_stringToPath.js
init_react();

// node_modules/lodash-es/_memoizeCapped.js
init_react();

// node_modules/lodash-es/memoize.js
init_react();
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func2, resolver) {
  if (typeof func2 != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func2.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func2) {
  var result = memoize_default(func2, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string3) {
  var result = [];
  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }
  string3.replace(rePropName, function(match2, number3, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match2);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/_toKey.js
init_react();
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/toString.js
init_react();

// node_modules/lodash-es/_baseToString.js
init_react();
var INFINITY2 = 1 / 0;
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto2 ? symbolProto2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/toPath.js
function toPath(value) {
  if (isArray_default(value)) {
    return arrayMap_default(value, toKey_default);
  }
  return isSymbol_default(value) ? [value] : copyArray_default(stringToPath_default(toString_default(value)));
}
var toPath_default = toPath;

// node_modules/tiny-warning/dist/tiny-warning.esm.js
init_react();
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/formik/dist/formik.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/lodash-es/cloneDeep.js
init_react();
var CLONE_DEEP_FLAG2 = 1;
var CLONE_SYMBOLS_FLAG3 = 4;
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG3);
}
var cloneDeep_default = cloneDeep;

// node_modules/formik/dist/formik.esm.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _inheritsLoose2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var isEmptyArray = function isEmptyArray2(value) {
  return Array.isArray(value) && value.length === 0;
};
var isFunction2 = function isFunction3(obj) {
  return typeof obj === "function";
};
var isObject2 = function isObject3(obj) {
  return obj !== null && typeof obj === "object";
};
var isInteger = function isInteger2(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isString = function isString2(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isEmptyChildren = function isEmptyChildren2(children) {
  return import_react28.Children.count(children) === 0;
};
var isPromise = function isPromise2(value) {
  return isObject2(value) && isFunction2(value.then);
};
function getActiveElement(doc) {
  doc = doc || (typeof document !== "undefined" ? document : void 0);
  if (typeof doc === "undefined") {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }
  var path = toPath_default(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  return obj === void 0 ? def : obj;
}
function setIn(obj, path, value) {
  var res = clone_default(obj);
  var resVal = res;
  var i = 0;
  var pathArray = toPath_default(path);
  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject2(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone_default(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === void 0) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }
  if (i === 0 && value === void 0) {
    delete res[pathArray[i]];
  }
  return res;
}
function setNestedObjectValues(object3, value, visited, response) {
  if (visited === void 0) {
    visited = /* @__PURE__ */ new WeakMap();
  }
  if (response === void 0) {
    response = {};
  }
  for (var _i = 0, _Object$keys = Object.keys(object3); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object3[k];
    if (isObject2(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }
  return response;
}
var FormikContext = /* @__PURE__ */ (0, import_react28.createContext)(void 0);
FormikContext.displayName = "FormikContext";
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0, import_react28.useContext)(FormikContext);
  !!!formik ? true ? tiny_warning_esm_default(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : tiny_warning_esm_default(false) : void 0;
  return formik;
}
function formikReducer(state, msg) {
  switch (msg.type) {
    case "SET_VALUES":
      return _extends2({}, state, {
        values: msg.payload
      });
    case "SET_TOUCHED":
      return _extends2({}, state, {
        touched: msg.payload
      });
    case "SET_ERRORS":
      if ((0, import_react_fast_compare.default)(state.errors, msg.payload)) {
        return state;
      }
      return _extends2({}, state, {
        errors: msg.payload
      });
    case "SET_STATUS":
      return _extends2({}, state, {
        status: msg.payload
      });
    case "SET_ISSUBMITTING":
      return _extends2({}, state, {
        isSubmitting: msg.payload
      });
    case "SET_ISVALIDATING":
      return _extends2({}, state, {
        isValidating: msg.payload
      });
    case "SET_FIELD_VALUE":
      return _extends2({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return _extends2({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_ERROR":
      return _extends2({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });
    case "RESET_FORM":
      return _extends2({}, state, msg.payload);
    case "SET_FORMIK_STATE":
      return msg.payload(state);
    case "SUBMIT_ATTEMPT":
      return _extends2({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return _extends2({}, state, {
        isSubmitting: false
      });
    case "SUBMIT_SUCCESS":
      return _extends2({}, state, {
        isSubmitting: false
      });
    default:
      return state;
  }
}
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref2) {
  var _ref$validateOnChange = _ref2.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref2.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref2.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref2.isInitialValid, _ref$enableReinitiali = _ref2.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref2.onSubmit, rest = _objectWithoutPropertiesLoose2(_ref2, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);
  var props = _extends2({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    onSubmit
  }, rest);
  var initialValues = (0, import_react28.useRef)(props.initialValues);
  var initialErrors = (0, import_react28.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0, import_react28.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0, import_react28.useRef)(props.initialStatus);
  var isMounted = (0, import_react28.useRef)(false);
  var fieldRegistry = (0, import_react28.useRef)({});
  if (true) {
    (0, import_react28.useEffect)(function() {
      !(typeof isInitialValid === "undefined") ? true ? tiny_warning_esm_default(false, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  (0, import_react28.useEffect)(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var _React$useReducer = (0, import_react28.useReducer)(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }), state = _React$useReducer[0], dispatch = _React$useReducer[1];
  var runValidateHandler = (0, import_react28.useCallback)(function(values2, field) {
    return new Promise(function(resolve2, reject) {
      var maybePromisedErrors = props.validate(values2, field);
      if (maybePromisedErrors == null) {
        resolve2(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function(errors) {
          resolve2(errors || emptyErrors);
        }, function(actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }
          reject(actualException);
        });
      } else {
        resolve2(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  var runValidationSchema = (0, import_react28.useCallback)(function(values2, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction2(validationSchema) ? validationSchema(field) : validationSchema;
    var promise5 = field && schema.validateAt ? schema.validateAt(field, values2) : validateYupSchema(values2, schema);
    return new Promise(function(resolve2, reject) {
      promise5.then(function() {
        resolve2(emptyErrors);
      }, function(err) {
        if (err.name === "ValidationError") {
          resolve2(yupToFormErrors(err));
        } else {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }
          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0, import_react28.useCallback)(function(field, value) {
    return new Promise(function(resolve2) {
      return resolve2(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0, import_react28.useCallback)(function(values2) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
      return isFunction2(fieldRegistry.current[f].validate);
    });
    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
      return runSingleFieldLevelValidation(f, getIn(values2, f));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(fieldValidations).then(function(fieldErrorsList) {
      return fieldErrorsList.reduce(function(prev, curr, index4) {
        if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") {
          return prev;
        }
        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index4], curr);
        }
        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]);
  var runAllValidations = (0, import_react28.useCallback)(function(values2) {
    return Promise.all([runFieldLevelValidations(values2), props.validationSchema ? runValidationSchema(values2) : {}, props.validate ? runValidateHandler(values2) : {}]).then(function(_ref22) {
      var fieldErrors = _ref22[0], schemaErrors = _ref22[1], validateErrors = _ref22[2];
      var combinedErrors = es_default.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]);
  var validateFormWithHighPriority = useEventCallback(function(values2) {
    if (values2 === void 0) {
      values2 = state.values;
    }
    dispatch({
      type: "SET_ISVALIDATING",
      payload: true
    });
    return runAllValidations(values2).then(function(combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
        dispatch({
          type: "SET_ERRORS",
          payload: combinedErrors
        });
      }
      return combinedErrors;
    });
  });
  (0, import_react28.useEffect)(function() {
    if (validateOnMount && isMounted.current === true && (0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0, import_react28.useCallback)(function(nextState) {
    var values2 = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values2;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;
    var dispatchFn = function dispatchFn2() {
      dispatch({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors,
          touched,
          status,
          values: values2,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
        }
      });
    };
    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  (0, import_react28.useEffect)(function() {
    if (isMounted.current === true && !(0, import_react_fast_compare.default)(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }
      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0, import_react28.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: "SET_ERRORS",
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0, import_react28.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: "SET_TOUCHED",
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0, import_react28.useEffect)(function() {
    if (enableReinitialize && isMounted.current === true && !(0, import_react_fast_compare.default)(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: "SET_STATUS",
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function(name) {
    if (fieldRegistry.current[name] && isFunction2(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);
      if (isPromise(maybePromise)) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: true
        });
        return maybePromise.then(function(x) {
          return x;
        }).then(function(error) {
          dispatch({
            type: "SET_FIELD_ERROR",
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: "SET_ISVALIDATING",
            payload: false
          });
        });
      } else {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: "SET_ISVALIDATING",
        payload: true
      });
      return runValidationSchema(state.values, name).then(function(x) {
        return x;
      }).then(function(error) {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
      });
    }
    return Promise.resolve();
  });
  var registerField = (0, import_react28.useCallback)(function(name, _ref3) {
    var validate2 = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate2
    };
  }, []);
  var unregisterField = (0, import_react28.useCallback)(function(name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function(touched, shouldValidate) {
    dispatch({
      type: "SET_TOUCHED",
      payload: touched
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0, import_react28.useCallback)(function(errors) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function(values2, shouldValidate) {
    var resolvedValues = isFunction2(values2) ? values2(state.values) : values2;
    dispatch({
      type: "SET_VALUES",
      payload: resolvedValues
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0, import_react28.useCallback)(function(field, value) {
    dispatch({
      type: "SET_FIELD_ERROR",
      payload: {
        field,
        value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: {
        field,
        value
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0, import_react28.useCallback)(function(eventOrTextValue, maybePath) {
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!isString(eventOrTextValue)) {
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }
      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;
      if (!field && true) {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
          handlerName: "handleChange"
        });
      }
      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple ? getSelectedValues(options) : value;
    }
    if (field) {
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function(eventOrPath) {
    if (isString(eventOrPath)) {
      return function(event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field,
        value: touched
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0, import_react28.useCallback)(function(e, path) {
    if (e.persist) {
      e.persist();
    }
    var _e$target = e.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;
    if (!field && true) {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: "handleblur-e-any--void",
        handlerName: "handleBlur"
      });
    }
    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function(eventOrString) {
    if (isString(eventOrString)) {
      return function(event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0, import_react28.useCallback)(function(stateOrCb) {
    if (isFunction2(stateOrCb)) {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0, import_react28.useCallback)(function(status) {
    dispatch({
      type: "SET_STATUS",
      payload: status
    });
  }, []);
  var setSubmitting = (0, import_react28.useCallback)(function(isSubmitting) {
    dispatch({
      type: "SET_ISSUBMITTING",
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function() {
    dispatch({
      type: "SUBMIT_ATTEMPT"
    });
    return validateFormWithHighPriority().then(function(combinedErrors) {
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
      if (isActuallyValid) {
        var promiseOrUndefined;
        try {
          promiseOrUndefined = executeSubmit();
          if (promiseOrUndefined === void 0) {
            return;
          }
        } catch (error) {
          throw error;
        }
        return Promise.resolve(promiseOrUndefined).then(function(result) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_SUCCESS"
            });
          }
          return result;
        })["catch"](function(_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_FAILURE"
            });
            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        dispatch({
          type: "SUBMIT_FAILURE"
        });
        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }
      return;
    });
  });
  var handleSubmit = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction2(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction2(e.stopPropagation)) {
      e.stopPropagation();
    }
    if (typeof document !== "undefined") {
      var activeElement = getActiveElement();
      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem("type")) ? true ? tiny_warning_esm_default(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : tiny_warning_esm_default(false) : void 0;
      }
    }
    submitForm()["catch"](function(reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormikState,
    submitForm
  };
  var executeSubmit = useEventCallback(function() {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function(e) {
    if (e && e.preventDefault && isFunction2(e.preventDefault)) {
      e.preventDefault();
    }
    if (e && e.stopPropagation && isFunction2(e.stopPropagation)) {
      e.stopPropagation();
    }
    resetForm();
  });
  var getFieldMeta = (0, import_react28.useCallback)(function(name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0, import_react28.useCallback)(function(name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched2(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0, import_react28.useCallback)(function(nameOrOptions) {
    var isAnObject = isObject2(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };
    if (isAnObject) {
      var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
      if (type === "checkbox") {
        if (valueProp === void 0) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === "radio") {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === "select" && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }
    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0, import_react28.useMemo)(function() {
    return !(0, import_react_fast_compare.default)(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid3 = (0, import_react28.useMemo)(function() {
    return typeof isInitialValid !== "undefined" ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction2(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);
  var ctx = _extends2({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid: isValid3,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount
  });
  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
  (0, import_react28.useImperativeHandle)(innerRef, function() {
    return formikbag;
  });
  if (true) {
    (0, import_react28.useEffect)(function() {
      !!props.render ? true ? tiny_warning_esm_default(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  return (0, import_react28.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0, import_react28.createElement)(component, formikbag) : render ? render(formikbag) : children ? isFunction2(children) ? children(formikbag) : !isEmptyChildren(children) ? import_react28.Children.only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
  var errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref5;
      if (_isArray) {
        if (_i >= _iterator.length)
          break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done)
          break;
        _ref5 = _i.value;
      }
      var err = _ref5;
      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
function validateYupSchema(values2, schema, sync2, context) {
  if (sync2 === void 0) {
    sync2 = false;
  }
  if (context === void 0) {
    context = {};
  }
  var validateData = prepareDataForValidation(values2);
  return schema[sync2 ? "validateSync" : "validate"](validateData, {
    abortEarly: false,
    context
  });
}
function prepareDataForValidation(values2) {
  var data = Array.isArray(values2) ? [] : {};
  for (var k in values2) {
    if (Object.prototype.hasOwnProperty.call(values2, k)) {
      var key = String(k);
      if (Array.isArray(values2[key]) === true) {
        data[key] = values2[key].map(function(value) {
          if (Array.isArray(value) === true || isPlainObject_default(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== "" ? value : void 0;
          }
        });
      } else if (isPlainObject_default(values2[key])) {
        data[key] = prepareDataForValidation(values2[key]);
      } else {
        data[key] = values2[key] !== "" ? values2[key] : void 0;
      }
    }
  }
  return data;
}
function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === "undefined") {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? es_default(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = es_default(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
function getSelectedValues(options) {
  return Array.from(options).filter(function(el) {
    return el.selected;
  }).map(function(el) {
    return el.value;
  });
}
function getValueForCheckbox(currentValue, checked, valueProp) {
  if (typeof currentValue === "boolean") {
    return Boolean(checked);
  }
  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index4 = -1;
  if (!Array.isArray(currentValue)) {
    if (!valueProp || valueProp == "true" || valueProp == "false") {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index4 = currentValue.indexOf(valueProp);
    isValueInArray = index4 >= 0;
  }
  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }
  if (!isValueInArray) {
    return currentArrayOfValues;
  }
  return currentArrayOfValues.slice(0, index4).concat(currentArrayOfValues.slice(index4 + 1));
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react28.useLayoutEffect : import_react28.useEffect;
function useEventCallback(fn) {
  var ref = (0, import_react28.useRef)(fn);
  useIsomorphicLayoutEffect(function() {
    ref.current = fn;
  });
  return (0, import_react28.useCallback)(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
}
function Field(_ref2) {
  var validate2 = _ref2.validate, name = _ref2.name, render = _ref2.render, children = _ref2.children, is = _ref2.as, component = _ref2.component, props = _objectWithoutPropertiesLoose2(_ref2, ["validate", "name", "render", "children", "as", "component"]);
  var _useFormikContext = useFormikContext(), formik = _objectWithoutPropertiesLoose2(_useFormikContext, ["validate", "validationSchema"]);
  if (true) {
    (0, import_react28.useEffect)(function() {
      !!render ? true ? tiny_warning_esm_default(false, '<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name="' + name + '" render={({field, form}) => ...} /> with <Field name="' + name + '">{({field, form, meta}) => ...}</Field>') : tiny_warning_esm_default(false) : void 0;
      !!(is && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.") : tiny_warning_esm_default(false) : void 0;
      !!(component && children && isFunction2(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.") : tiny_warning_esm_default(false) : void 0;
      !!(render && children && !isEmptyChildren(children)) ? true ? tiny_warning_esm_default(false, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored") : tiny_warning_esm_default(false) : void 0;
    }, []);
  }
  var registerField = formik.registerField, unregisterField = formik.unregisterField;
  (0, import_react28.useEffect)(function() {
    registerField(name, {
      validate: validate2
    });
    return function() {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate2]);
  var field = formik.getFieldProps(_extends2({
    name
  }, props));
  var meta2 = formik.getFieldMeta(name);
  var legacyBag = {
    field,
    form: formik
  };
  if (render) {
    return render(_extends2({}, legacyBag, {
      meta: meta2
    }));
  }
  if (isFunction2(children)) {
    return children(_extends2({}, legacyBag, {
      meta: meta2
    }));
  }
  if (component) {
    if (typeof component === "string") {
      var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose2(props, ["innerRef"]);
      return (0, import_react28.createElement)(component, _extends2({
        ref: innerRef
      }, field, rest), children);
    }
    return (0, import_react28.createElement)(component, _extends2({
      field,
      form: formik
    }, props), children);
  }
  var asElement = is || "input";
  if (typeof asElement === "string") {
    var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose2(props, ["innerRef"]);
    return (0, import_react28.createElement)(asElement, _extends2({
      ref: _innerRef
    }, field, _rest), children);
  }
  return (0, import_react28.createElement)(asElement, _extends2({}, field, props), children);
}
var Form = /* @__PURE__ */ (0, import_react28.forwardRef)(function(props, ref) {
  var action2 = props.action, rest = _objectWithoutPropertiesLoose2(props, ["action"]);
  var _action = action2 != null ? action2 : "#";
  var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
  return (0, import_react28.createElement)("form", Object.assign({
    onSubmit: handleSubmit,
    ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = "Form";
function connect(Comp) {
  var C = function C2(props) {
    return (0, import_react28.createElement)(FormikConsumer, null, function(formik) {
      !!!formik ? true ? tiny_warning_esm_default(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : tiny_warning_esm_default(false) : void 0;
      return (0, import_react28.createElement)(Comp, Object.assign({}, props, {
        formik
      }));
    });
  };
  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || "Component";
  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return (0, import_hoist_non_react_statics.default)(C, Comp);
}
var move = function move2(array2, from2, to) {
  var copy = copyArrayLike(array2);
  var value = copy[from2];
  copy.splice(from2, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap2(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a2 = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a2;
  return copy;
};
var insert = function insert2(arrayLike, index4, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index4, 0, value);
  return copy;
};
var replace = function replace2(arrayLike, index4, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index4] = value;
  return copy;
};
var copyArrayLike = function copyArrayLike2(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function(key) {
      return parseInt(key);
    }).reduce(function(max5, el) {
      return el > max5 ? el : max5;
    }, 0);
    return Array.from(_extends2({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};
var FieldArrayInner = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose2(FieldArrayInner2, _React$Component);
  function FieldArrayInner2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.updateArrayField = function(fn, alterTouched, alterErrors) {
      var _this$props = _this.props, name = _this$props.name, setFormikState = _this$props.formik.setFormikState;
      setFormikState(function(prevState) {
        var updateErrors = typeof alterErrors === "function" ? alterErrors : fn;
        var updateTouched = typeof alterTouched === "function" ? alterTouched : fn;
        var values2 = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : void 0;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : void 0;
        if (isEmptyArray(fieldError)) {
          fieldError = void 0;
        }
        if (isEmptyArray(fieldTouched)) {
          fieldTouched = void 0;
        }
        return _extends2({}, prevState, {
          values: values2,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };
    _this.push = function(value) {
      return _this.updateArrayField(function(arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [cloneDeep_default(value)]);
      }, false, false);
    };
    _this.handlePush = function(value) {
      return function() {
        return _this.push(value);
      };
    };
    _this.swap = function(indexA, indexB) {
      return _this.updateArrayField(function(array2) {
        return swap(array2, indexA, indexB);
      }, true, true);
    };
    _this.handleSwap = function(indexA, indexB) {
      return function() {
        return _this.swap(indexA, indexB);
      };
    };
    _this.move = function(from2, to) {
      return _this.updateArrayField(function(array2) {
        return move(array2, from2, to);
      }, true, true);
    };
    _this.handleMove = function(from2, to) {
      return function() {
        return _this.move(from2, to);
      };
    };
    _this.insert = function(index4, value) {
      return _this.updateArrayField(function(array2) {
        return insert(array2, index4, value);
      }, function(array2) {
        return insert(array2, index4, null);
      }, function(array2) {
        return insert(array2, index4, null);
      });
    };
    _this.handleInsert = function(index4, value) {
      return function() {
        return _this.insert(index4, value);
      };
    };
    _this.replace = function(index4, value) {
      return _this.updateArrayField(function(array2) {
        return replace(array2, index4, value);
      }, false, false);
    };
    _this.handleReplace = function(index4, value) {
      return function() {
        return _this.replace(index4, value);
      };
    };
    _this.unshift = function(value) {
      var length2 = -1;
      _this.updateArrayField(function(array2) {
        var arr = array2 ? [value].concat(array2) : [value];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      }, function(array2) {
        var arr = array2 ? [null].concat(array2) : [null];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      }, function(array2) {
        var arr = array2 ? [null].concat(array2) : [null];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      });
      return length2;
    };
    _this.handleUnshift = function(value) {
      return function() {
        return _this.unshift(value);
      };
    };
    _this.handleRemove = function(index4) {
      return function() {
        return _this.remove(index4);
      };
    };
    _this.handlePop = function() {
      return function() {
        return _this.pop();
      };
    };
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = FieldArrayInner2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, import_react_fast_compare.default)(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };
  _proto.remove = function remove(index4) {
    var result;
    this.updateArrayField(function(array2) {
      var copy = array2 ? copyArrayLike(array2) : [];
      if (!result) {
        result = copy[index4];
      }
      if (isFunction2(copy.splice)) {
        copy.splice(index4, 1);
      }
      return copy;
    }, true, true);
    return result;
  };
  _proto.pop = function pop() {
    var result;
    this.updateArrayField(function(array2) {
      var tmp = array2;
      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }
      return tmp;
    }, true, true);
    return result;
  };
  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };
    var _this$props2 = this.props, component = _this$props2.component, render2 = _this$props2.render, children = _this$props2.children, name = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose2(_this$props2$formik, ["validate", "validationSchema"]);
    var props = _extends2({}, arrayHelpers, {
      form: restOfFormik,
      name
    });
    return component ? (0, import_react28.createElement)(component, props) : render2 ? render2(props) : children ? typeof children === "function" ? children(props) : !isEmptyChildren(children) ? import_react28.Children.only(children) : null : null;
  };
  return FieldArrayInner2;
}(import_react28.Component);
FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var ErrorMessageImpl = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose2(ErrorMessageImpl2, _React$Component);
  function ErrorMessageImpl2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ErrorMessageImpl2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, component = _this$props.component, formik = _this$props.formik, render2 = _this$props.render, children = _this$props.children, name = _this$props.name, rest = _objectWithoutPropertiesLoose2(_this$props, ["component", "formik", "render", "children", "name"]);
    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render2 ? isFunction2(render2) ? render2(error) : null : children ? isFunction2(children) ? children(error) : null : component ? (0, import_react28.createElement)(component, rest, error) : error : null;
  };
  return ErrorMessageImpl2;
}(import_react28.Component);
var ErrorMessage = /* @__PURE__ */ connect(ErrorMessageImpl);

// node_modules/yup/es/index.js
init_react();

// node_modules/yup/es/mixed.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/createClass.js
init_react();
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/lodash-es/has.js
init_react();

// node_modules/lodash-es/_baseHas.js
init_react();
var objectProto15 = Object.prototype;
var hasOwnProperty12 = objectProto15.hasOwnProperty;
function baseHas(object3, key) {
  return object3 != null && hasOwnProperty12.call(object3, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/_hasPath.js
init_react();

// node_modules/lodash-es/_castPath.js
init_react();

// node_modules/lodash-es/_isKey.js
init_react();
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object3) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object3 != null && value in Object(object3);
}
var isKey_default = isKey;

// node_modules/lodash-es/_castPath.js
function castPath(value, object3) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object3) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_hasPath.js
function hasPath(object3, path, hasFunc) {
  path = castPath_default(path, object3);
  var index4 = -1, length2 = path.length, result = false;
  while (++index4 < length2) {
    var key = toKey_default(path[index4]);
    if (!(result = object3 != null && hasFunc(object3, key))) {
      break;
    }
    object3 = object3[key];
  }
  if (result || ++index4 != length2) {
    return result;
  }
  length2 = object3 == null ? 0 : object3.length;
  return !!length2 && isLength_default(length2) && isIndex_default(key, length2) && (isArray_default(object3) || isArguments_default(object3));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/has.js
function has(object3, path) {
  return object3 != null && hasPath_default(object3, path, baseHas_default);
}
var has_default = has;

// node_modules/lodash-es/cloneDeepWith.js
init_react();
var CLONE_DEEP_FLAG3 = 1;
var CLONE_SYMBOLS_FLAG4 = 4;
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseClone_default(value, CLONE_DEEP_FLAG3 | CLONE_SYMBOLS_FLAG4, customizer);
}
var cloneDeepWith_default = cloneDeepWith;

// node_modules/lodash-es/toArray.js
init_react();

// node_modules/lodash-es/isString.js
init_react();
var stringTag4 = "[object String]";
function isString3(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag4;
}
var isString_default = isString3;

// node_modules/lodash-es/_iteratorToArray.js
init_react();
function iteratorToArray(iterator) {
  var data, result = [];
  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}
var iteratorToArray_default = iteratorToArray;

// node_modules/lodash-es/_mapToArray.js
init_react();
function mapToArray(map) {
  var index4 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index4] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
init_react();
function setToArray(set) {
  var index4 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index4] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_stringToArray.js
init_react();

// node_modules/lodash-es/_asciiToArray.js
init_react();
function asciiToArray(string3) {
  return string3.split("");
}
var asciiToArray_default = asciiToArray;

// node_modules/lodash-es/_hasUnicode.js
init_react();
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string3) {
  return reHasUnicode.test(string3);
}
var hasUnicode_default = hasUnicode;

// node_modules/lodash-es/_unicodeToArray.js
init_react();
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string3) {
  return string3.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// node_modules/lodash-es/_stringToArray.js
function stringToArray(string3) {
  return hasUnicode_default(string3) ? unicodeToArray_default(string3) : asciiToArray_default(string3);
}
var stringToArray_default = stringToArray;

// node_modules/lodash-es/values.js
init_react();

// node_modules/lodash-es/_baseValues.js
init_react();
function baseValues(object3, props) {
  return arrayMap_default(props, function(key) {
    return object3[key];
  });
}
var baseValues_default = baseValues;

// node_modules/lodash-es/values.js
function values(object3) {
  return object3 == null ? [] : baseValues_default(object3, keys_default(object3));
}
var values_default = values;

// node_modules/lodash-es/toArray.js
var mapTag6 = "[object Map]";
var setTag6 = "[object Set]";
var symIterator = Symbol_default ? Symbol_default.iterator : void 0;
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike_default(value)) {
    return isString_default(value) ? stringToArray_default(value) : copyArray_default(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray_default(value[symIterator]());
  }
  var tag = getTag_default(value), func2 = tag == mapTag6 ? mapToArray_default : tag == setTag6 ? setToArray_default : values_default;
  return func2(value);
}
var toArray_default = toArray;

// node_modules/yup/es/locale.js
init_react();

// node_modules/yup/es/util/printValue.js
init_react();
var toString2 = Object.prototype.toString;
var errorToString = Error.prototype.toString;
var regExpToString = RegExp.prototype.toString;
var symbolToString2 = typeof Symbol !== "undefined" ? Symbol.prototype.toString : function() {
  return "";
};
var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  var isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings) {
  if (quoteStrings === void 0) {
    quoteStrings = false;
  }
  if (val == null || val === true || val === false)
    return "" + val;
  var typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? '"' + val + '"' : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString2.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  var tag = toString2.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  var result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    var result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}

// node_modules/yup/es/locale.js
var mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: function notType(_ref2) {
    var path = _ref2.path, type = _ref2.type, value = _ref2.value, originalValue = _ref2.originalValue;
    var isCast = originalValue != null && originalValue !== value;
    var msg = path + " must be a `" + type + "` type, " + ("but the final value was: `" + printValue(value, true) + "`") + (isCast ? " (cast from the value `" + printValue(originalValue, true) + "`)." : ".");
    if (value === null) {
      msg += '\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`';
    }
    return msg;
  },
  defined: "${path} must be defined"
};
var string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
var number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  notEqual: "${path} must be not equal to ${notEqual}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
var date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
var object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
var array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items"
};

// node_modules/yup/es/Condition.js
init_react();

// node_modules/yup/es/util/isSchema.js
init_react();
var isSchema_default = function(obj) {
  return obj && obj.__isYupSchema__;
};

// node_modules/yup/es/Condition.js
var Condition = /* @__PURE__ */ function() {
  function Condition2(refs, options) {
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has_default(options, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    var is = options.is, then = options.then, otherwise = options.otherwise;
    var check = typeof is === "function" ? is : function() {
      for (var _len = arguments.length, values2 = new Array(_len), _key = 0; _key < _len; _key++) {
        values2[_key] = arguments[_key];
      }
      return values2.every(function(value) {
        return value === is;
      });
    };
    this.fn = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var options2 = args.pop();
      var schema = args.pop();
      var branch = check.apply(void 0, args) ? then : otherwise;
      if (!branch)
        return void 0;
      if (typeof branch === "function")
        return branch(schema);
      return schema.concat(branch.resolve(options2));
    };
  }
  var _proto = Condition2.prototype;
  _proto.resolve = function resolve2(base, options) {
    var values2 = this.refs.map(function(ref) {
      return ref.getValue(options);
    });
    var schema = this.fn.apply(base, values2.concat(base, options));
    if (schema === void 0 || schema === base)
      return base;
    if (!isSchema_default(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  };
  return Condition2;
}();
var Condition_default = Condition;

// node_modules/yup/es/util/runValidations.js
init_react();
var import_synchronous_promise = __toESM(require_synchronous_promise());

// node_modules/yup/es/ValidationError.js
init_react();
var strReg = /\$\{\s*(\w+)\s*\}/g;
var replace3 = function replace4(str) {
  return function(params) {
    return str.replace(strReg, function(_, key) {
      return printValue(params[key]);
    });
  };
};
function ValidationError(errors, value, field, type) {
  var _this = this;
  this.name = "ValidationError";
  this.value = value;
  this.path = field;
  this.type = type;
  this.errors = [];
  this.inner = [];
  if (errors)
    [].concat(errors).forEach(function(err) {
      _this.errors = _this.errors.concat(err.errors || err);
      if (err.inner)
        _this.inner = _this.inner.concat(err.inner.length ? err.inner : err);
    });
  this.message = this.errors.length > 1 ? this.errors.length + " errors occurred" : this.errors[0];
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, ValidationError);
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.isError = function(err) {
  return err && err.name === "ValidationError";
};
ValidationError.formatError = function(message, params) {
  if (typeof message === "string")
    message = replace3(message);
  var fn = function fn2(params2) {
    params2.path = params2.label || params2.path || "this";
    return typeof message === "function" ? message(params2) : message;
  };
  return arguments.length === 1 ? fn : fn(params);
};

// node_modules/yup/es/util/runValidations.js
var promise = function promise2(sync2) {
  return sync2 ? import_synchronous_promise.SynchronousPromise : Promise;
};
var unwrapError = function unwrapError2(errors) {
  if (errors === void 0) {
    errors = [];
  }
  return errors.inner && errors.inner.length ? errors.inner : [].concat(errors);
};
function scopeToValue(promises, value, sync2) {
  var p = promise(sync2).all(promises);
  var b2 = p.catch(function(err) {
    if (err.name === "ValidationError")
      err.value = value;
    throw err;
  });
  var c2 = b2.then(function() {
    return value;
  });
  return c2;
}
function propagateErrors(endEarly, errors) {
  return endEarly ? null : function(err) {
    errors.push(err);
    return err.value;
  };
}
function settled(promises, sync2) {
  var Promise3 = promise(sync2);
  return Promise3.all(promises.map(function(p) {
    return Promise3.resolve(p).then(function(value) {
      return {
        fulfilled: true,
        value
      };
    }, function(value) {
      return {
        fulfilled: false,
        value
      };
    });
  }));
}
function collectErrors(_ref2) {
  var validations = _ref2.validations, value = _ref2.value, path = _ref2.path, sync2 = _ref2.sync, errors = _ref2.errors, sort = _ref2.sort;
  errors = unwrapError(errors);
  return settled(validations, sync2).then(function(results) {
    var nestedErrors = results.filter(function(r) {
      return !r.fulfilled;
    }).reduce(function(arr, _ref22) {
      var error = _ref22.value;
      if (!ValidationError.isError(error)) {
        throw error;
      }
      return arr.concat(error);
    }, []);
    if (sort)
      nestedErrors.sort(sort);
    errors = nestedErrors.concat(errors);
    if (errors.length)
      throw new ValidationError(errors, value, path);
    return value;
  });
}
function runValidations(_ref3) {
  var endEarly = _ref3.endEarly, options = _objectWithoutPropertiesLoose(_ref3, ["endEarly"]);
  if (endEarly)
    return scopeToValue(options.validations, options.value, options.sync);
  return collectErrors(options);
}

// node_modules/yup/es/util/prependDeep.js
init_react();
var isObject4 = function isObject5(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
function prependDeep(target, source) {
  for (var key in source) {
    if (has_default(source, key)) {
      var sourceVal = source[key], targetVal = target[key];
      if (targetVal === void 0) {
        target[key] = sourceVal;
      } else if (targetVal === sourceVal) {
        continue;
      } else if (isSchema_default(targetVal)) {
        if (isSchema_default(sourceVal))
          target[key] = sourceVal.concat(targetVal);
      } else if (isObject4(targetVal)) {
        if (isObject4(sourceVal))
          target[key] = prependDeep(targetVal, sourceVal);
      } else if (Array.isArray(targetVal)) {
        if (Array.isArray(sourceVal))
          target[key] = sourceVal.concat(targetVal);
      }
    }
  }
  return target;
}

// node_modules/yup/es/util/createValidation.js
init_react();
init_extends();

// node_modules/lodash-es/mapValues.js
init_react();

// node_modules/lodash-es/_baseForOwn.js
init_react();

// node_modules/lodash-es/_baseFor.js
init_react();

// node_modules/lodash-es/_createBaseFor.js
init_react();
function createBaseFor(fromRight) {
  return function(object3, iteratee, keysFunc) {
    var index4 = -1, iterable = Object(object3), props = keysFunc(object3), length2 = props.length;
    while (length2--) {
      var key = props[fromRight ? length2 : ++index4];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object3;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object3, iteratee) {
  return object3 && baseFor_default(object3, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_baseIteratee.js
init_react();

// node_modules/lodash-es/_baseMatches.js
init_react();

// node_modules/lodash-es/_baseIsMatch.js
init_react();

// node_modules/lodash-es/_baseIsEqual.js
init_react();

// node_modules/lodash-es/_baseIsEqualDeep.js
init_react();

// node_modules/lodash-es/_equalArrays.js
init_react();

// node_modules/lodash-es/_SetCache.js
init_react();

// node_modules/lodash-es/_setCacheAdd.js
init_react();
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
init_react();
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index4 = -1, length2 = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index4 < length2) {
    this.add(values2[index4]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_arraySome.js
init_react();
function arraySome(array2, predicate) {
  var index4 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index4 < length2) {
    if (predicate(array2[index4], index4, array2)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_cacheHas.js
init_react();
function cacheHas(cache2, key) {
  return cache2.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index4 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index4 < arrLength) {
    var arrValue = array2[index4], othValue = other[index4];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index4, other, array2, stack) : customizer(arrValue, othValue, index4, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_equalByTag.js
init_react();
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag4 = "[object Boolean]";
var dateTag4 = "[object Date]";
var errorTag3 = "[object Error]";
var mapTag7 = "[object Map]";
var numberTag4 = "[object Number]";
var regexpTag4 = "[object RegExp]";
var setTag7 = "[object Set]";
var stringTag5 = "[object String]";
var symbolTag4 = "[object Symbol]";
var arrayBufferTag4 = "[object ArrayBuffer]";
var dataViewTag5 = "[object DataView]";
var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
function equalByTag(object3, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag5:
      if (object3.byteLength != other.byteLength || object3.byteOffset != other.byteOffset) {
        return false;
      }
      object3 = object3.buffer;
      other = other.buffer;
    case arrayBufferTag4:
      if (object3.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object3), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag4:
    case dateTag4:
    case numberTag4:
      return eq_default(+object3, +other);
    case errorTag3:
      return object3.name == other.name && object3.message == other.message;
    case regexpTag4:
    case stringTag5:
      return object3 == other + "";
    case mapTag7:
      var convert = mapToArray_default;
    case setTag7:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object3.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object3);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object3, other);
      var result = equalArrays_default(convert(object3), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object3);
      return result;
    case symbolTag4:
      if (symbolValueOf2) {
        return symbolValueOf2.call(object3) == symbolValueOf2.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_equalObjects.js
init_react();
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto16 = Object.prototype;
var hasOwnProperty13 = objectProto16.hasOwnProperty;
function equalObjects(object3, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object3), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index4 = objLength;
  while (index4--) {
    var key = objProps[index4];
    if (!(isPartial ? key in other : hasOwnProperty13.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object3);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object3;
  }
  var result = true;
  stack.set(object3, other);
  stack.set(other, object3);
  var skipCtor = isPartial;
  while (++index4 < objLength) {
    key = objProps[index4];
    var objValue = object3[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object3, stack) : customizer(objValue, othValue, key, object3, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object3.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object3 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object3);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag4 = "[object Arguments]";
var arrayTag3 = "[object Array]";
var objectTag5 = "[object Object]";
var objectProto17 = Object.prototype;
var hasOwnProperty14 = objectProto17.hasOwnProperty;
function baseIsEqualDeep(object3, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object3), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object3), othTag = othIsArr ? arrayTag3 : getTag_default(other);
  objTag = objTag == argsTag4 ? objectTag5 : objTag;
  othTag = othTag == argsTag4 ? objectTag5 : othTag;
  var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object3)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object3) ? equalArrays_default(object3, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object3, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty14.call(object3, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty14.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object3.value() : object3, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object3, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object3, source, matchData, customizer) {
  var index4 = matchData.length, length2 = index4, noCustomizer = !customizer;
  if (object3 == null) {
    return !length2;
  }
  object3 = Object(object3);
  while (index4--) {
    var data = matchData[index4];
    if (noCustomizer && data[2] ? data[1] !== object3[data[0]] : !(data[0] in object3)) {
      return false;
    }
  }
  while (++index4 < length2) {
    data = matchData[index4];
    var key = data[0], objValue = object3[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object3)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object3, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_getMatchData.js
init_react();

// node_modules/lodash-es/_isStrictComparable.js
init_react();
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object3) {
  var result = keys_default(object3), length2 = result.length;
  while (length2--) {
    var key = result[length2], value = object3[key];
    result[length2] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
init_react();
function matchesStrictComparable(key, srcValue) {
  return function(object3) {
    if (object3 == null) {
      return false;
    }
    return object3[key] === srcValue && (srcValue !== void 0 || key in Object(object3));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object3) {
    return object3 === source || baseIsMatch_default(object3, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/_baseMatchesProperty.js
init_react();

// node_modules/lodash-es/get.js
init_react();

// node_modules/lodash-es/_baseGet.js
init_react();
function baseGet(object3, path) {
  path = castPath_default(path, object3);
  var index4 = 0, length2 = path.length;
  while (object3 != null && index4 < length2) {
    object3 = object3[toKey_default(path[index4++])];
  }
  return index4 && index4 == length2 ? object3 : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get(object3, path, defaultValue) {
  var result = object3 == null ? void 0 : baseGet_default(object3, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/lodash-es/hasIn.js
init_react();

// node_modules/lodash-es/_baseHasIn.js
init_react();
function baseHasIn(object3, key) {
  return object3 != null && key in Object(object3);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/hasIn.js
function hasIn(object3, path) {
  return object3 != null && hasPath_default(object3, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object3) {
    var objValue = get_default(object3, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object3, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/identity.js
init_react();
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/property.js
init_react();

// node_modules/lodash-es/_baseProperty.js
init_react();
function baseProperty(key) {
  return function(object3) {
    return object3 == null ? void 0 : object3[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
init_react();
function basePropertyDeep(path) {
  return function(object3) {
    return baseGet_default(object3, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/mapValues.js
function mapValues(object3, iteratee) {
  var result = {};
  iteratee = baseIteratee_default(iteratee, 3);
  baseForOwn_default(object3, function(value, key, object4) {
    baseAssignValue_default(result, key, iteratee(value, key, object4));
  });
  return result;
}
var mapValues_default = mapValues;

// node_modules/yup/es/Reference.js
init_react();
init_extends();
var import_property_expr = __toESM(require_property_expr());
var prefixes = {
  context: "$",
  value: "."
};
var Reference = /* @__PURE__ */ function() {
  function Reference2(key, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    var prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && (0, import_property_expr.getter)(this.path, true);
    this.map = options.map;
  }
  var _proto = Reference2.prototype;
  _proto.getValue = function getValue2(options) {
    var result = this.isContext ? options.context : this.isValue ? options.value : options.parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  };
  _proto.cast = function cast2(value, options) {
    return this.getValue(_extends({}, options, {
      value
    }));
  };
  _proto.resolve = function resolve2() {
    return this;
  };
  _proto.describe = function describe4() {
    return {
      type: "ref",
      key: this.key
    };
  };
  _proto.toString = function toString3() {
    return "Ref(" + this.key + ")";
  };
  Reference2.isRef = function isRef(value) {
    return value && value.__isYupRef;
  };
  return Reference2;
}();
Reference.prototype.__isYupRef = true;

// node_modules/yup/es/util/createValidation.js
var import_synchronous_promise2 = __toESM(require_synchronous_promise());
var formatError = ValidationError.formatError;
var thenable = function thenable2(p) {
  return p && typeof p.then === "function" && typeof p.catch === "function";
};
function runTest(testFn, ctx, value, sync2) {
  var result = testFn.call(ctx, value);
  if (!sync2)
    return Promise.resolve(result);
  if (thenable(result)) {
    throw new Error('Validation test of type: "' + ctx.type + '" returned a Promise during a synchronous validate. This test will finish after the validate call has returned');
  }
  return import_synchronous_promise2.SynchronousPromise.resolve(result);
}
function resolveParams(oldParams, newParams, resolve2) {
  return mapValues_default(_extends({}, oldParams, newParams), resolve2);
}
function createErrorFactory(_ref2) {
  var value = _ref2.value, label2 = _ref2.label, resolve2 = _ref2.resolve, originalValue = _ref2.originalValue, opts = _objectWithoutPropertiesLoose(_ref2, ["value", "label", "resolve", "originalValue"]);
  return function createError(_temp) {
    var _ref22 = _temp === void 0 ? {} : _temp, _ref2$path = _ref22.path, path = _ref2$path === void 0 ? opts.path : _ref2$path, _ref2$message = _ref22.message, message = _ref2$message === void 0 ? opts.message : _ref2$message, _ref2$type = _ref22.type, type = _ref2$type === void 0 ? opts.name : _ref2$type, params = _ref22.params;
    params = _extends({
      path,
      value,
      originalValue,
      label: label2
    }, resolveParams(opts.params, params, resolve2));
    return _extends(new ValidationError(formatError(message, params), value, path, type), {
      params
    });
  };
}
function createValidation(options) {
  var name = options.name, message = options.message, test2 = options.test, params = options.params;
  function validate2(_ref3) {
    var value = _ref3.value, path = _ref3.path, label2 = _ref3.label, options2 = _ref3.options, originalValue = _ref3.originalValue, sync2 = _ref3.sync, rest = _objectWithoutPropertiesLoose(_ref3, ["value", "path", "label", "options", "originalValue", "sync"]);
    var parent = options2.parent;
    var resolve2 = function resolve3(item) {
      return Reference.isRef(item) ? item.getValue({
        value,
        parent,
        context: options2.context
      }) : item;
    };
    var createError = createErrorFactory({
      message,
      path,
      value,
      originalValue,
      params,
      label: label2,
      resolve: resolve2,
      name
    });
    var ctx = _extends({
      path,
      parent,
      type: name,
      createError,
      resolve: resolve2,
      options: options2
    }, rest);
    return runTest(test2, ctx, value, sync2).then(function(validOrError) {
      if (ValidationError.isError(validOrError))
        throw validOrError;
      else if (!validOrError)
        throw createError();
    });
  }
  validate2.OPTIONS = options;
  return validate2;
}

// node_modules/yup/es/util/reach.js
init_react();
var import_property_expr2 = __toESM(require_property_expr());
var trim = function trim2(part) {
  return part.substr(0, part.length - 1).substr(1);
};
function getIn2(schema, path, value, context) {
  if (context === void 0) {
    context = value;
  }
  var parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  (0, import_property_expr2.forEach)(path, function(_part, isBracket, isArray2) {
    var part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    if (schema.innerType) {
      var idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error("Yup.reach cannot resolve an array item at index: " + _part + ", in the path: " + path + ". because there is no value at that index. ");
      }
      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part])
        throw new Error("The schema does not contain the path: " + path + ". " + ("(failed at: " + lastPartDebug + ' which is a type: "' + schema._type + '")'));
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}

// node_modules/yup/es/mixed.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var RefSet = /* @__PURE__ */ function() {
  function RefSet2() {
    this.list = /* @__PURE__ */ new Set();
    this.refs = /* @__PURE__ */ new Map();
  }
  var _proto = RefSet2.prototype;
  _proto.describe = function describe4() {
    var description = [];
    for (var _iterator = _createForOfIteratorHelperLoose(this.list), _step; !(_step = _iterator()).done; ) {
      var item = _step.value;
      description.push(item);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(this.refs), _step2; !(_step2 = _iterator2()).done; ) {
      var _step2$value = _step2.value, ref = _step2$value[1];
      description.push(ref.describe());
    }
    return description;
  };
  _proto.toArray = function toArray3() {
    return toArray_default(this.list).concat(toArray_default(this.refs.values()));
  };
  _proto.add = function add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  };
  _proto.delete = function _delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  };
  _proto.has = function has2(value, resolve2) {
    if (this.list.has(value))
      return true;
    var item, values2 = this.refs.values();
    while (item = values2.next(), !item.done) {
      if (resolve2(item.value) === value)
        return true;
    }
    return false;
  };
  _proto.clone = function clone3() {
    var next = new RefSet2();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  };
  _proto.merge = function merge(newItems, removeItems) {
    var next = this.clone();
    newItems.list.forEach(function(value) {
      return next.add(value);
    });
    newItems.refs.forEach(function(value) {
      return next.add(value);
    });
    removeItems.list.forEach(function(value) {
      return next.delete(value);
    });
    removeItems.refs.forEach(function(value) {
      return next.delete(value);
    });
    return next;
  };
  _createClass(RefSet2, [{
    key: "size",
    get: function get2() {
      return this.list.size + this.refs.size;
    }
  }]);
  return RefSet2;
}();
function SchemaType(options) {
  var _this = this;
  if (options === void 0) {
    options = {};
  }
  if (!(this instanceof SchemaType))
    return new SchemaType();
  this._deps = [];
  this._conditions = [];
  this._options = {
    abortEarly: true,
    recursive: true
  };
  this._exclusive = /* @__PURE__ */ Object.create(null);
  this._whitelist = new RefSet();
  this._blacklist = new RefSet();
  this.tests = [];
  this.transforms = [];
  this.withMutation(function() {
    _this.typeError(mixed.notType);
  });
  if (has_default(options, "default"))
    this._defaultDefault = options.default;
  this.type = options.type || "mixed";
  this._type = options.type || "mixed";
}
var proto = SchemaType.prototype = {
  __isYupSchema__: true,
  constructor: SchemaType,
  clone: function clone2() {
    var _this2 = this;
    if (this._mutate)
      return this;
    return cloneDeepWith_default(this, function(value) {
      if (isSchema_default(value) && value !== _this2)
        return value;
    });
  },
  label: function label(_label) {
    var next = this.clone();
    next._label = _label;
    return next;
  },
  meta: function meta(obj) {
    if (arguments.length === 0)
      return this._meta;
    var next = this.clone();
    next._meta = _extends(next._meta || {}, obj);
    return next;
  },
  withMutation: function withMutation(fn) {
    var before = this._mutate;
    this._mutate = true;
    var result = fn(this);
    this._mutate = before;
    return result;
  },
  concat: function concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema._type !== this._type && this._type !== "mixed")
      throw new TypeError("You cannot `concat()` schema's of different types: " + this._type + " and " + schema._type);
    var next = prependDeep(schema.clone(), this);
    if (has_default(schema, "_default"))
      next._default = schema._default;
    next.tests = this.tests;
    next._exclusive = this._exclusive;
    next._whitelist = this._whitelist.merge(schema._whitelist, schema._blacklist);
    next._blacklist = this._blacklist.merge(schema._blacklist, schema._whitelist);
    next.withMutation(function(next2) {
      schema.tests.forEach(function(fn) {
        next2.test(fn.OPTIONS);
      });
    });
    return next;
  },
  isType: function isType(v) {
    if (this._nullable && v === null)
      return true;
    return !this._typeCheck || this._typeCheck(v);
  },
  resolve: function resolve(options) {
    var schema = this;
    if (schema._conditions.length) {
      var conditions = schema._conditions;
      schema = schema.clone();
      schema._conditions = [];
      schema = conditions.reduce(function(schema2, condition) {
        return condition.resolve(schema2, options);
      }, schema);
      schema = schema.resolve(options);
    }
    return schema;
  },
  cast: function cast(value, options) {
    if (options === void 0) {
      options = {};
    }
    var resolvedSchema = this.resolve(_extends({}, options, {
      value
    }));
    var result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      var formattedValue = printValue(value);
      var formattedResult = printValue(result);
      throw new TypeError("The value of " + (options.path || "field") + " could not be cast to a value " + ('that satisfies the schema type: "' + resolvedSchema._type + '". \n\n') + ("attempted value: " + formattedValue + " \n") + (formattedResult !== formattedValue ? "result of cast: " + formattedResult : ""));
    }
    return result;
  },
  _cast: function _cast(rawValue) {
    var _this3 = this;
    var value = rawValue === void 0 ? rawValue : this.transforms.reduce(function(value2, fn) {
      return fn.call(_this3, value2, rawValue);
    }, rawValue);
    if (value === void 0 && has_default(this, "_default")) {
      value = this.default();
    }
    return value;
  },
  _validate: function _validate(_value, options) {
    var _this4 = this;
    if (options === void 0) {
      options = {};
    }
    var value = _value;
    var originalValue = options.originalValue != null ? options.originalValue : _value;
    var isStrict = this._option("strict", options);
    var endEarly = this._option("abortEarly", options);
    var sync2 = options.sync;
    var path = options.path;
    var label2 = this._label;
    if (!isStrict) {
      value = this._cast(value, _extends({
        assert: false
      }, options));
    }
    var validationParams = {
      value,
      path,
      schema: this,
      options,
      label: label2,
      originalValue,
      sync: sync2
    };
    if (options.from) {
      validationParams.from = options.from;
    }
    var initialTests = [];
    if (this._typeError)
      initialTests.push(this._typeError(validationParams));
    if (this._whitelistError)
      initialTests.push(this._whitelistError(validationParams));
    if (this._blacklistError)
      initialTests.push(this._blacklistError(validationParams));
    return runValidations({
      validations: initialTests,
      endEarly,
      value,
      path,
      sync: sync2
    }).then(function(value2) {
      return runValidations({
        path,
        sync: sync2,
        value: value2,
        endEarly,
        validations: _this4.tests.map(function(fn) {
          return fn(validationParams);
        })
      });
    });
  },
  validate: function validate(value, options) {
    if (options === void 0) {
      options = {};
    }
    var schema = this.resolve(_extends({}, options, {
      value
    }));
    return schema._validate(value, options);
  },
  validateSync: function validateSync(value, options) {
    if (options === void 0) {
      options = {};
    }
    var schema = this.resolve(_extends({}, options, {
      value
    }));
    var result, err;
    schema._validate(value, _extends({}, options, {
      sync: true
    })).then(function(r) {
      return result = r;
    }).catch(function(e) {
      return err = e;
    });
    if (err)
      throw err;
    return result;
  },
  isValid: function isValid(value, options) {
    return this.validate(value, options).then(function() {
      return true;
    }).catch(function(err) {
      if (err.name === "ValidationError")
        return false;
      throw err;
    });
  },
  isValidSync: function isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (err.name === "ValidationError")
        return false;
      throw err;
    }
  },
  getDefault: function getDefault(options) {
    if (options === void 0) {
      options = {};
    }
    var schema = this.resolve(options);
    return schema.default();
  },
  default: function _default(def) {
    if (arguments.length === 0) {
      var defaultValue = has_default(this, "_default") ? this._default : this._defaultDefault;
      return typeof defaultValue === "function" ? defaultValue.call(this) : cloneDeepWith_default(defaultValue);
    }
    var next = this.clone();
    next._default = def;
    return next;
  },
  strict: function strict(isStrict) {
    if (isStrict === void 0) {
      isStrict = true;
    }
    var next = this.clone();
    next._options.strict = isStrict;
    return next;
  },
  _isPresent: function _isPresent(value) {
    return value != null;
  },
  required: function required(message) {
    if (message === void 0) {
      message = mixed.required;
    }
    return this.test({
      message,
      name: "required",
      exclusive: true,
      test: function test2(value) {
        return this.schema._isPresent(value);
      }
    });
  },
  notRequired: function notRequired() {
    var next = this.clone();
    next.tests = next.tests.filter(function(test2) {
      return test2.OPTIONS.name !== "required";
    });
    return next;
  },
  nullable: function nullable(isNullable) {
    if (isNullable === void 0) {
      isNullable = true;
    }
    var next = this.clone();
    next._nullable = isNullable;
    return next;
  },
  transform: function transform(fn) {
    var next = this.clone();
    next.transforms.push(fn);
    return next;
  },
  test: function test() {
    var opts;
    if (arguments.length === 1) {
      if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "function") {
        opts = {
          test: arguments.length <= 0 ? void 0 : arguments[0]
        };
      } else {
        opts = arguments.length <= 0 ? void 0 : arguments[0];
      }
    } else if (arguments.length === 2) {
      opts = {
        name: arguments.length <= 0 ? void 0 : arguments[0],
        test: arguments.length <= 1 ? void 0 : arguments[1]
      };
    } else {
      opts = {
        name: arguments.length <= 0 ? void 0 : arguments[0],
        message: arguments.length <= 1 ? void 0 : arguments[1],
        test: arguments.length <= 2 ? void 0 : arguments[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    var next = this.clone();
    var validate2 = createValidation(opts);
    var isExclusive = opts.exclusive || opts.name && next._exclusive[opts.name] === true;
    if (opts.exclusive && !opts.name) {
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    next._exclusive[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(function(fn) {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate2.OPTIONS.test)
          return false;
      }
      return true;
    });
    next.tests.push(validate2);
    return next;
  },
  when: function when(keys2, options) {
    if (arguments.length === 1) {
      options = keys2;
      keys2 = ".";
    }
    var next = this.clone(), deps = [].concat(keys2).map(function(key) {
      return new Reference(key);
    });
    deps.forEach(function(dep) {
      if (dep.isSibling)
        next._deps.push(dep.key);
    });
    next._conditions.push(new Condition_default(deps, options));
    return next;
  },
  typeError: function typeError(message) {
    var next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test: function test2(value) {
        if (value !== void 0 && !this.schema.isType(value))
          return this.createError({
            params: {
              type: this.schema._type
            }
          });
        return true;
      }
    });
    return next;
  },
  oneOf: function oneOf(enums, message) {
    if (message === void 0) {
      message = mixed.oneOf;
    }
    var next = this.clone();
    enums.forEach(function(val) {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test: function test2(value) {
        if (value === void 0)
          return true;
        var valids = this.schema._whitelist;
        return valids.has(value, this.resolve) ? true : this.createError({
          params: {
            values: valids.toArray().join(", ")
          }
        });
      }
    });
    return next;
  },
  notOneOf: function notOneOf(enums, message) {
    if (message === void 0) {
      message = mixed.notOneOf;
    }
    var next = this.clone();
    enums.forEach(function(val) {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test: function test2(value) {
        var invalids = this.schema._blacklist;
        if (invalids.has(value, this.resolve))
          return this.createError({
            params: {
              values: invalids.toArray().join(", ")
            }
          });
        return true;
      }
    });
    return next;
  },
  strip: function strip(_strip) {
    if (_strip === void 0) {
      _strip = true;
    }
    var next = this.clone();
    next._strip = _strip;
    return next;
  },
  _option: function _option(key, overrides) {
    return has_default(overrides, key) ? overrides[key] : this._options[key];
  },
  describe: function describe() {
    var next = this.clone();
    var description = {
      type: next._type,
      meta: next._meta,
      label: next._label,
      tests: next.tests.map(function(fn) {
        return {
          name: fn.OPTIONS.name,
          params: fn.OPTIONS.params
        };
      }).filter(function(n, idx, list) {
        return list.findIndex(function(c2) {
          return c2.name === n.name;
        }) === idx;
      })
    };
    if (next._whitelist.size)
      description.oneOf = next._whitelist.describe();
    if (next._blacklist.size)
      description.notOneOf = next._blacklist.describe();
    return description;
  },
  defined: function defined(message) {
    if (message === void 0) {
      message = mixed.defined;
    }
    return this.nullable().test({
      message,
      name: "defined",
      exclusive: true,
      test: function test2(value) {
        return value !== void 0;
      }
    });
  }
};
var _loop = function _loop2() {
  var method = _arr[_i];
  proto[method + "At"] = function(path, value, options) {
    if (options === void 0) {
      options = {};
    }
    var _getIn = getIn2(this, path, value, options.context), parent = _getIn.parent, parentPath = _getIn.parentPath, schema = _getIn.schema;
    return schema[method](parent && parent[parentPath], _extends({}, options, {
      parent,
      path
    }));
  };
};
for (_i = 0, _arr = ["validate", "validateSync"]; _i < _arr.length; _i++) {
  _loop();
}
var _i;
var _arr;
for (_i2 = 0, _arr2 = ["equals", "is"]; _i2 < _arr2.length; _i2++) {
  alias = _arr2[_i2];
  proto[alias] = proto.oneOf;
}
var alias;
var _i2;
var _arr2;
for (_i3 = 0, _arr3 = ["not", "nope"]; _i3 < _arr3.length; _i3++) {
  _alias = _arr3[_i3];
  proto[_alias] = proto.notOneOf;
}
var _alias;
var _i3;
var _arr3;
proto.optional = proto.notRequired;

// node_modules/yup/es/boolean.js
init_react();

// node_modules/yup/es/util/inherits.js
init_react();
init_extends();
function inherits(ctor, superCtor, spec) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  _extends(ctor.prototype, spec);
}

// node_modules/yup/es/boolean.js
function BooleanSchema() {
  var _this = this;
  if (!(this instanceof BooleanSchema))
    return new BooleanSchema();
  SchemaType.call(this, {
    type: "boolean"
  });
  this.withMutation(function() {
    _this.transform(function(value) {
      if (!this.isType(value)) {
        if (/^(true|1)$/i.test(value))
          return true;
        if (/^(false|0)$/i.test(value))
          return false;
      }
      return value;
    });
  });
}
inherits(BooleanSchema, SchemaType, {
  _typeCheck: function _typeCheck(v) {
    if (v instanceof Boolean)
      v = v.valueOf();
    return typeof v === "boolean";
  }
});

// node_modules/yup/es/string.js
init_react();

// node_modules/yup/es/util/isAbsent.js
init_react();
var isAbsent_default = function(value) {
  return value == null;
};

// node_modules/yup/es/string.js
var rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
var rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
var rUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var isTrimmed = function isTrimmed2(value) {
  return isAbsent_default(value) || value === value.trim();
};
function StringSchema() {
  var _this = this;
  if (!(this instanceof StringSchema))
    return new StringSchema();
  SchemaType.call(this, {
    type: "string"
  });
  this.withMutation(function() {
    _this.transform(function(value) {
      if (this.isType(value))
        return value;
      return value != null && value.toString ? value.toString() : value;
    });
  });
}
inherits(StringSchema, SchemaType, {
  _typeCheck: function _typeCheck2(value) {
    if (value instanceof String)
      value = value.valueOf();
    return typeof value === "string";
  },
  _isPresent: function _isPresent2(value) {
    return SchemaType.prototype._isPresent.call(this, value) && value.length > 0;
  },
  length: function length(_length, message) {
    if (message === void 0) {
      message = string.length;
    }
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length: _length
      },
      test: function test2(value) {
        return isAbsent_default(value) || value.length === this.resolve(_length);
      }
    });
  },
  min: function min(_min, message) {
    if (message === void 0) {
      message = string.min;
    }
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min: _min
      },
      test: function test2(value) {
        return isAbsent_default(value) || value.length >= this.resolve(_min);
      }
    });
  },
  max: function max(_max, message) {
    if (message === void 0) {
      message = string.max;
    }
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max: _max
      },
      test: function test2(value) {
        return isAbsent_default(value) || value.length <= this.resolve(_max);
      }
    });
  },
  matches: function matches(regex, options) {
    var excludeEmptyString = false;
    var message;
    var name;
    if (options) {
      if (typeof options === "object") {
        excludeEmptyString = options.excludeEmptyString;
        message = options.message;
        name = options.name;
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      test: function test2(value) {
        return isAbsent_default(value) || value === "" && excludeEmptyString || value.search(regex) !== -1;
      }
    });
  },
  email: function email(message) {
    if (message === void 0) {
      message = string.email;
    }
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  },
  url: function url(message) {
    if (message === void 0) {
      message = string.url;
    }
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  },
  uuid: function uuid(message) {
    if (message === void 0) {
      message = string.uuid;
    }
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  },
  ensure: function ensure() {
    return this.default("").transform(function(val) {
      return val === null ? "" : val;
    });
  },
  trim: function trim3(message) {
    if (message === void 0) {
      message = string.trim;
    }
    return this.transform(function(val) {
      return val != null ? val.trim() : val;
    }).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  },
  lowercase: function lowercase(message) {
    if (message === void 0) {
      message = string.lowercase;
    }
    return this.transform(function(value) {
      return !isAbsent_default(value) ? value.toLowerCase() : value;
    }).test({
      message,
      name: "string_case",
      exclusive: true,
      test: function test2(value) {
        return isAbsent_default(value) || value === value.toLowerCase();
      }
    });
  },
  uppercase: function uppercase(message) {
    if (message === void 0) {
      message = string.uppercase;
    }
    return this.transform(function(value) {
      return !isAbsent_default(value) ? value.toUpperCase() : value;
    }).test({
      message,
      name: "string_case",
      exclusive: true,
      test: function test2(value) {
        return isAbsent_default(value) || value === value.toUpperCase();
      }
    });
  }
});

// node_modules/yup/es/number.js
init_react();
var isNaN2 = function isNaN3(value) {
  return value != +value;
};
function NumberSchema() {
  var _this = this;
  if (!(this instanceof NumberSchema))
    return new NumberSchema();
  SchemaType.call(this, {
    type: "number"
  });
  this.withMutation(function() {
    _this.transform(function(value) {
      var parsed = value;
      if (typeof parsed === "string") {
        parsed = parsed.replace(/\s/g, "");
        if (parsed === "")
          return NaN;
        parsed = +parsed;
      }
      if (this.isType(parsed))
        return parsed;
      return parseFloat(parsed);
    });
  });
}
inherits(NumberSchema, SchemaType, {
  _typeCheck: function _typeCheck3(value) {
    if (value instanceof Number)
      value = value.valueOf();
    return typeof value === "number" && !isNaN2(value);
  },
  min: function min2(_min, message) {
    if (message === void 0) {
      message = number.min;
    }
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min: _min
      },
      test: function test2(value) {
        return isAbsent_default(value) || value >= this.resolve(_min);
      }
    });
  },
  max: function max2(_max, message) {
    if (message === void 0) {
      message = number.max;
    }
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max: _max
      },
      test: function test2(value) {
        return isAbsent_default(value) || value <= this.resolve(_max);
      }
    });
  },
  lessThan: function lessThan(less, message) {
    if (message === void 0) {
      message = number.lessThan;
    }
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        less
      },
      test: function test2(value) {
        return isAbsent_default(value) || value < this.resolve(less);
      }
    });
  },
  moreThan: function moreThan(more, message) {
    if (message === void 0) {
      message = number.moreThan;
    }
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        more
      },
      test: function test2(value) {
        return isAbsent_default(value) || value > this.resolve(more);
      }
    });
  },
  positive: function positive(msg) {
    if (msg === void 0) {
      msg = number.positive;
    }
    return this.moreThan(0, msg);
  },
  negative: function negative(msg) {
    if (msg === void 0) {
      msg = number.negative;
    }
    return this.lessThan(0, msg);
  },
  integer: function integer(message) {
    if (message === void 0) {
      message = number.integer;
    }
    return this.test({
      name: "integer",
      message,
      test: function test2(val) {
        return isAbsent_default(val) || Number.isInteger(val);
      }
    });
  },
  truncate: function truncate() {
    return this.transform(function(value) {
      return !isAbsent_default(value) ? value | 0 : value;
    });
  },
  round: function round(method) {
    var avail = ["ceil", "floor", "round", "trunc"];
    method = method && method.toLowerCase() || "round";
    if (method === "trunc")
      return this.truncate();
    if (avail.indexOf(method.toLowerCase()) === -1)
      throw new TypeError("Only valid options for round() are: " + avail.join(", "));
    return this.transform(function(value) {
      return !isAbsent_default(value) ? Math[method](value) : value;
    });
  }
});

// node_modules/yup/es/date.js
init_react();

// node_modules/yup/es/util/isodate.js
init_react();
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k; k = numericKeys[i]; ++i) {
      struct[k] = +struct[k] || 0;
    }
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}

// node_modules/yup/es/date.js
var invalidDate = new Date("");
var isDate = function isDate2(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
};
function DateSchema() {
  var _this = this;
  if (!(this instanceof DateSchema))
    return new DateSchema();
  SchemaType.call(this, {
    type: "date"
  });
  this.withMutation(function() {
    _this.transform(function(value) {
      if (this.isType(value))
        return value;
      value = parseIsoDate(value);
      return !isNaN(value) ? new Date(value) : invalidDate;
    });
  });
}
inherits(DateSchema, SchemaType, {
  _typeCheck: function _typeCheck4(v) {
    return isDate(v) && !isNaN(v.getTime());
  },
  min: function min3(_min, message) {
    if (message === void 0) {
      message = date.min;
    }
    var limit = _min;
    if (!Reference.isRef(limit)) {
      limit = this.cast(_min);
      if (!this._typeCheck(limit))
        throw new TypeError("`min` must be a Date or a value that can be `cast()` to a Date");
    }
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min: _min
      },
      test: function test2(value) {
        return isAbsent_default(value) || value >= this.resolve(limit);
      }
    });
  },
  max: function max3(_max, message) {
    if (message === void 0) {
      message = date.max;
    }
    var limit = _max;
    if (!Reference.isRef(limit)) {
      limit = this.cast(_max);
      if (!this._typeCheck(limit))
        throw new TypeError("`max` must be a Date or a value that can be `cast()` to a Date");
    }
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max: _max
      },
      test: function test2(value) {
        return isAbsent_default(value) || value <= this.resolve(limit);
      }
    });
  }
});

// node_modules/yup/es/object.js
init_react();

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
init_react();
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

// node_modules/yup/es/object.js
init_extends();

// node_modules/lodash-es/snakeCase.js
init_react();

// node_modules/lodash-es/_createCompounder.js
init_react();

// node_modules/lodash-es/_arrayReduce.js
init_react();
function arrayReduce(array2, iteratee, accumulator, initAccum) {
  var index4 = -1, length2 = array2 == null ? 0 : array2.length;
  if (initAccum && length2) {
    accumulator = array2[++index4];
  }
  while (++index4 < length2) {
    accumulator = iteratee(accumulator, array2[index4], index4, array2);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/lodash-es/deburr.js
init_react();

// node_modules/lodash-es/_deburrLetter.js
init_react();

// node_modules/lodash-es/_basePropertyOf.js
init_react();
function basePropertyOf(object3) {
  return function(key) {
    return object3 == null ? void 0 : object3[key];
  };
}
var basePropertyOf_default = basePropertyOf;

// node_modules/lodash-es/_deburrLetter.js
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter = basePropertyOf_default(deburredLetters);
var deburrLetter_default = deburrLetter;

// node_modules/lodash-es/deburr.js
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsCombo2 = "[" + rsComboRange3 + "]";
var reComboMark = RegExp(rsCombo2, "g");
function deburr(string3) {
  string3 = toString_default(string3);
  return string3 && string3.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
}
var deburr_default = deburr;

// node_modules/lodash-es/words.js
init_react();

// node_modules/lodash-es/_asciiWords.js
init_react();
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string3) {
  return string3.match(reAsciiWord) || [];
}
var asciiWords_default = asciiWords;

// node_modules/lodash-es/_hasUnicodeWord.js
init_react();
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string3) {
  return reHasUnicodeWord.test(string3);
}
var hasUnicodeWord_default = hasUnicodeWord;

// node_modules/lodash-es/_unicodeWords.js
init_react();
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange4 = "\\u0300-\\u036f";
var reComboHalfMarksRange4 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange4 = "\\u20d0-\\u20ff";
var rsComboRange4 = rsComboMarksRange4 + reComboHalfMarksRange4 + rsComboSymbolsRange4;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo3 = "[" + rsComboRange4 + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo3 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ3 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsEmoji = "(?:" + [rsDingbat, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string3) {
  return string3.match(reUnicodeWord) || [];
}
var unicodeWords_default = unicodeWords;

// node_modules/lodash-es/words.js
function words(string3, pattern, guard) {
  string3 = toString_default(string3);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord_default(string3) ? unicodeWords_default(string3) : asciiWords_default(string3);
  }
  return string3.match(pattern) || [];
}
var words_default = words;

// node_modules/lodash-es/_createCompounder.js
var rsApos2 = "['\u2019]";
var reApos = RegExp(rsApos2, "g");
function createCompounder(callback) {
  return function(string3) {
    return arrayReduce_default(words_default(deburr_default(string3).replace(reApos, "")), callback, "");
  };
}
var createCompounder_default = createCompounder;

// node_modules/lodash-es/snakeCase.js
var snakeCase = createCompounder_default(function(result, word, index4) {
  return result + (index4 ? "_" : "") + word.toLowerCase();
});
var snakeCase_default = snakeCase;

// node_modules/lodash-es/camelCase.js
init_react();

// node_modules/lodash-es/capitalize.js
init_react();

// node_modules/lodash-es/upperFirst.js
init_react();

// node_modules/lodash-es/_createCaseFirst.js
init_react();

// node_modules/lodash-es/_castSlice.js
init_react();

// node_modules/lodash-es/_baseSlice.js
init_react();
function baseSlice(array2, start, end) {
  var index4 = -1, length2 = array2.length;
  if (start < 0) {
    start = -start > length2 ? 0 : length2 + start;
  }
  end = end > length2 ? length2 : end;
  if (end < 0) {
    end += length2;
  }
  length2 = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length2);
  while (++index4 < length2) {
    result[index4] = array2[index4 + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_castSlice.js
function castSlice(array2, start, end) {
  var length2 = array2.length;
  end = end === void 0 ? length2 : end;
  return !start && end >= length2 ? array2 : baseSlice_default(array2, start, end);
}
var castSlice_default = castSlice;

// node_modules/lodash-es/_createCaseFirst.js
function createCaseFirst(methodName) {
  return function(string3) {
    string3 = toString_default(string3);
    var strSymbols = hasUnicode_default(string3) ? stringToArray_default(string3) : void 0;
    var chr = strSymbols ? strSymbols[0] : string3.charAt(0);
    var trailing = strSymbols ? castSlice_default(strSymbols, 1).join("") : string3.slice(1);
    return chr[methodName]() + trailing;
  };
}
var createCaseFirst_default = createCaseFirst;

// node_modules/lodash-es/upperFirst.js
var upperFirst = createCaseFirst_default("toUpperCase");
var upperFirst_default = upperFirst;

// node_modules/lodash-es/capitalize.js
function capitalize(string3) {
  return upperFirst_default(toString_default(string3).toLowerCase());
}
var capitalize_default = capitalize;

// node_modules/lodash-es/camelCase.js
var camelCase = createCompounder_default(function(result, word, index4) {
  word = word.toLowerCase();
  return result + (index4 ? capitalize_default(word) : word);
});
var camelCase_default = camelCase;

// node_modules/lodash-es/mapKeys.js
init_react();
function mapKeys(object3, iteratee) {
  var result = {};
  iteratee = baseIteratee_default(iteratee, 3);
  baseForOwn_default(object3, function(value, key, object4) {
    baseAssignValue_default(result, iteratee(value, key, object4), value);
  });
  return result;
}
var mapKeys_default = mapKeys;

// node_modules/yup/es/object.js
var import_property_expr4 = __toESM(require_property_expr());

// node_modules/yup/es/util/sortFields.js
init_react();
var import_toposort = __toESM(require_toposort());
var import_property_expr3 = __toESM(require_property_expr());
function sortFields(fields, excludes) {
  if (excludes === void 0) {
    excludes = [];
  }
  var edges = [], nodes = [];
  function addNode(depPath, key2) {
    var node2 = (0, import_property_expr3.split)(depPath)[0];
    if (!~nodes.indexOf(node2))
      nodes.push(node2);
    if (!~excludes.indexOf(key2 + "-" + node2))
      edges.push([key2, node2]);
  }
  for (var key in fields) {
    if (has_default(fields, key)) {
      var value = fields[key];
      if (!~nodes.indexOf(key))
        nodes.push(key);
      if (Reference.isRef(value) && value.isSibling)
        addNode(value.path, key);
      else if (isSchema_default(value) && value._deps)
        value._deps.forEach(function(path) {
          return addNode(path, key);
        });
    }
  }
  return import_toposort.default.array(nodes, edges).reverse();
}

// node_modules/yup/es/util/sortByKeyOrder.js
init_react();
function findIndex(arr, err) {
  var idx = Infinity;
  arr.some(function(key, ii) {
    if (err.path.indexOf(key) !== -1) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(fields) {
  var keys2 = Object.keys(fields);
  return function(a2, b2) {
    return findIndex(keys2, a2) - findIndex(keys2, b2);
  };
}

// node_modules/yup/es/util/makePath.js
init_react();
function makePath(strings) {
  for (var _len = arguments.length, values2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values2[_key - 1] = arguments[_key];
  }
  var path = strings.reduce(function(str, next) {
    var value = values2.shift();
    return str + (value == null ? "" : value) + next;
  });
  return path.replace(/^\./, "");
}

// node_modules/yup/es/object.js
var import_synchronous_promise3 = __toESM(require_synchronous_promise());
function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["", '["', '"]']);
  _templateObject3 = function _templateObject32() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["", ".", ""]);
  _templateObject2 = function _templateObject23() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["", ".", ""]);
  _templateObject = function _templateObject5() {
    return data;
  };
  return data;
}
var isObject6 = function isObject7(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
var promise3 = function promise4(sync2) {
  return sync2 ? import_synchronous_promise3.SynchronousPromise : Promise;
};
function unknown(ctx, value) {
  var known = Object.keys(ctx.fields);
  return Object.keys(value).filter(function(key) {
    return known.indexOf(key) === -1;
  });
}
function ObjectSchema(spec) {
  var _this2 = this;
  if (!(this instanceof ObjectSchema))
    return new ObjectSchema(spec);
  SchemaType.call(this, {
    type: "object",
    default: function _default2() {
      var _this = this;
      if (!this._nodes.length)
        return void 0;
      var dft = {};
      this._nodes.forEach(function(key) {
        dft[key] = _this.fields[key].default ? _this.fields[key].default() : void 0;
      });
      return dft;
    }
  });
  this.fields = /* @__PURE__ */ Object.create(null);
  this._nodes = [];
  this._excludedEdges = [];
  this.withMutation(function() {
    _this2.transform(function coerce(value) {
      if (typeof value === "string") {
        try {
          value = JSON.parse(value);
        } catch (err) {
          value = null;
        }
      }
      if (this.isType(value))
        return value;
      return null;
    });
    if (spec) {
      _this2.shape(spec);
    }
  });
}
inherits(ObjectSchema, SchemaType, {
  _typeCheck: function _typeCheck5(value) {
    return isObject6(value) || typeof value === "function";
  },
  _cast: function _cast2(_value, options) {
    var _this3 = this;
    if (options === void 0) {
      options = {};
    }
    var value = SchemaType.prototype._cast.call(this, _value, options);
    if (value === void 0)
      return this.default();
    if (!this._typeCheck(value))
      return value;
    var fields = this.fields;
    var strip2 = this._option("stripUnknown", options) === true;
    var props = this._nodes.concat(Object.keys(value).filter(function(v) {
      return _this3._nodes.indexOf(v) === -1;
    }));
    var intermediateValue = {};
    var innerOptions = _extends({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    var isChanged = false;
    props.forEach(function(prop) {
      var field = fields[prop];
      var exists = has_default(value, prop);
      if (field) {
        var fieldValue;
        var strict2 = field._options && field._options.strict;
        innerOptions.path = makePath(_templateObject(), options.path, prop);
        innerOptions.value = value[prop];
        field = field.resolve(innerOptions);
        if (field._strip === true) {
          isChanged = isChanged || prop in value;
          return;
        }
        fieldValue = !options.__validating || !strict2 ? field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== void 0)
          intermediateValue[prop] = fieldValue;
      } else if (exists && !strip2)
        intermediateValue[prop] = value[prop];
      if (intermediateValue[prop] !== value[prop])
        isChanged = true;
    });
    return isChanged ? intermediateValue : value;
  },
  _validate: function _validate2(_value, opts) {
    var _this4 = this;
    if (opts === void 0) {
      opts = {};
    }
    var endEarly, recursive;
    var sync2 = opts.sync;
    var errors = [];
    var originalValue = opts.originalValue != null ? opts.originalValue : _value;
    var from2 = [{
      schema: this,
      value: originalValue
    }].concat(opts.from || []);
    endEarly = this._option("abortEarly", opts);
    recursive = this._option("recursive", opts);
    opts = _extends({}, opts, {
      __validating: true,
      originalValue,
      from: from2
    });
    return SchemaType.prototype._validate.call(this, _value, opts).catch(propagateErrors(endEarly, errors)).then(function(value) {
      if (!recursive || !isObject6(value)) {
        if (errors.length)
          throw errors[0];
        return value;
      }
      from2 = originalValue ? [].concat(from2) : [{
        schema: _this4,
        value: originalValue || value
      }].concat(opts.from || []);
      originalValue = originalValue || value;
      var validations = _this4._nodes.map(function(key) {
        var path = key.indexOf(".") === -1 ? makePath(_templateObject2(), opts.path, key) : makePath(_templateObject3(), opts.path, key);
        var field = _this4.fields[key];
        var innerOptions = _extends({}, opts, {
          path,
          from: from2,
          parent: value,
          originalValue: originalValue[key]
        });
        if (field && field.validate) {
          innerOptions.strict = true;
          return field.validate(value[key], innerOptions);
        }
        return promise3(sync2).resolve(true);
      });
      return runValidations({
        sync: sync2,
        validations,
        value,
        errors,
        endEarly,
        path: opts.path,
        sort: sortByKeyOrder(_this4.fields)
      });
    });
  },
  concat: function concat2(schema) {
    var next = SchemaType.prototype.concat.call(this, schema);
    next._nodes = sortFields(next.fields, next._excludedEdges);
    return next;
  },
  shape: function shape(schema, excludes) {
    if (excludes === void 0) {
      excludes = [];
    }
    var next = this.clone();
    var fields = _extends(next.fields, schema);
    next.fields = fields;
    if (excludes.length) {
      if (!Array.isArray(excludes[0]))
        excludes = [excludes];
      var keys2 = excludes.map(function(_ref2) {
        var first = _ref2[0], second = _ref2[1];
        return first + "-" + second;
      });
      next._excludedEdges = next._excludedEdges.concat(keys2);
    }
    next._nodes = sortFields(fields, next._excludedEdges);
    return next;
  },
  from: function from(_from, to, alias) {
    var fromGetter = (0, import_property_expr4.getter)(_from, true);
    return this.transform(function(obj) {
      if (obj == null)
        return obj;
      var newObj = obj;
      if (has_default(obj, _from)) {
        newObj = _extends({}, obj);
        if (!alias)
          delete newObj[_from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  },
  noUnknown: function noUnknown(noAllow, message) {
    if (noAllow === void 0) {
      noAllow = true;
    }
    if (message === void 0) {
      message = object.noUnknown;
    }
    if (typeof noAllow === "string") {
      message = noAllow;
      noAllow = true;
    }
    var next = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test: function test2(value) {
        if (value == null)
          return true;
        var unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next._options.stripUnknown = noAllow;
    return next;
  },
  unknown: function unknown2(allow, message) {
    if (allow === void 0) {
      allow = true;
    }
    if (message === void 0) {
      message = object.noUnknown;
    }
    return this.noUnknown(!allow, message);
  },
  transformKeys: function transformKeys(fn) {
    return this.transform(function(obj) {
      return obj && mapKeys_default(obj, function(_, key) {
        return fn(key);
      });
    });
  },
  camelCase: function camelCase2() {
    return this.transformKeys(camelCase_default);
  },
  snakeCase: function snakeCase2() {
    return this.transformKeys(snakeCase_default);
  },
  constantCase: function constantCase() {
    return this.transformKeys(function(key) {
      return snakeCase_default(key).toUpperCase();
    });
  },
  describe: function describe2() {
    var base = SchemaType.prototype.describe.call(this);
    base.fields = mapValues_default(this.fields, function(value) {
      return value.describe();
    });
    return base;
  }
});

// node_modules/yup/es/array.js
init_react();
init_extends();
function _templateObject22() {
  var data = _taggedTemplateLiteralLoose(["", "[", "]"]);
  _templateObject22 = function _templateObject23() {
    return data;
  };
  return data;
}
function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["", "[", "]"]);
  _templateObject4 = function _templateObject5() {
    return data;
  };
  return data;
}
var array_default = ArraySchema;
function ArraySchema(type) {
  var _this = this;
  if (!(this instanceof ArraySchema))
    return new ArraySchema(type);
  SchemaType.call(this, {
    type: "array"
  });
  this._subType = void 0;
  this.innerType = void 0;
  this.withMutation(function() {
    _this.transform(function(values2) {
      if (typeof values2 === "string")
        try {
          values2 = JSON.parse(values2);
        } catch (err) {
          values2 = null;
        }
      return this.isType(values2) ? values2 : null;
    });
    if (type)
      _this.of(type);
  });
}
inherits(ArraySchema, SchemaType, {
  _typeCheck: function _typeCheck6(v) {
    return Array.isArray(v);
  },
  _cast: function _cast3(_value, _opts) {
    var _this2 = this;
    var value = SchemaType.prototype._cast.call(this, _value, _opts);
    if (!this._typeCheck(value) || !this.innerType)
      return value;
    var isChanged = false;
    var castArray = value.map(function(v, idx) {
      var castElement = _this2.innerType.cast(v, _extends({}, _opts, {
        path: makePath(_templateObject4(), _opts.path, idx)
      }));
      if (castElement !== v) {
        isChanged = true;
      }
      return castElement;
    });
    return isChanged ? castArray : value;
  },
  _validate: function _validate3(_value, options) {
    var _this3 = this;
    if (options === void 0) {
      options = {};
    }
    var errors = [];
    var sync2 = options.sync;
    var path = options.path;
    var innerType = this.innerType;
    var endEarly = this._option("abortEarly", options);
    var recursive = this._option("recursive", options);
    var originalValue = options.originalValue != null ? options.originalValue : _value;
    return SchemaType.prototype._validate.call(this, _value, options).catch(propagateErrors(endEarly, errors)).then(function(value) {
      if (!recursive || !innerType || !_this3._typeCheck(value)) {
        if (errors.length)
          throw errors[0];
        return value;
      }
      originalValue = originalValue || value;
      var validations = new Array(value.length);
      for (var idx = 0; idx < value.length; idx++) {
        var item = value[idx];
        var _path = makePath(_templateObject22(), options.path, idx);
        var innerOptions = _extends({}, options, {
          path: _path,
          strict: true,
          parent: value,
          index: idx,
          originalValue: originalValue[idx]
        });
        validations[idx] = innerType.validate ? innerType.validate(item, innerOptions) : true;
      }
      return runValidations({
        sync: sync2,
        path,
        value,
        errors,
        endEarly,
        validations
      });
    });
  },
  _isPresent: function _isPresent3(value) {
    return SchemaType.prototype._isPresent.call(this, value) && value.length > 0;
  },
  of: function of(schema) {
    var next = this.clone();
    if (schema !== false && !isSchema_default(schema))
      throw new TypeError("`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. not: " + printValue(schema));
    next._subType = schema;
    next.innerType = schema;
    return next;
  },
  min: function min4(_min, message) {
    message = message || array.min;
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min: _min
      },
      test: function test2(value) {
        return isAbsent_default(value) || value.length >= this.resolve(_min);
      }
    });
  },
  max: function max4(_max, message) {
    message = message || array.max;
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max: _max
      },
      test: function test2(value) {
        return isAbsent_default(value) || value.length <= this.resolve(_max);
      }
    });
  },
  ensure: function ensure2() {
    var _this4 = this;
    return this.default(function() {
      return [];
    }).transform(function(val, original) {
      if (_this4._typeCheck(val))
        return val;
      return original == null ? [] : [].concat(original);
    });
  },
  compact: function compact(rejector) {
    var reject = !rejector ? function(v) {
      return !!v;
    } : function(v, i, a2) {
      return !rejector(v, i, a2);
    };
    return this.transform(function(values2) {
      return values2 != null ? values2.filter(reject) : values2;
    });
  },
  describe: function describe3() {
    var base = SchemaType.prototype.describe.call(this);
    if (this.innerType)
      base.innerType = this.innerType.describe();
    return base;
  }
});

// node_modules/yup/es/Lazy.js
init_react();
var Lazy = /* @__PURE__ */ function() {
  function Lazy2(mapFn) {
    this._resolve = function(value, options) {
      var schema = mapFn(value, options);
      if (!isSchema_default(schema))
        throw new TypeError("lazy() functions must return a valid schema");
      return schema.resolve(options);
    };
  }
  var _proto = Lazy2.prototype;
  _proto.resolve = function resolve2(options) {
    return this._resolve(options.value, options);
  };
  _proto.cast = function cast2(value, options) {
    return this._resolve(value, options).cast(value, options);
  };
  _proto.validate = function validate2(value, options) {
    return this._resolve(value, options).validate(value, options);
  };
  _proto.validateSync = function validateSync2(value, options) {
    return this._resolve(value, options).validateSync(value, options);
  };
  _proto.validateAt = function validateAt(path, value, options) {
    return this._resolve(value, options).validateAt(path, value, options);
  };
  _proto.validateSyncAt = function validateSyncAt(path, value, options) {
    return this._resolve(value, options).validateSyncAt(path, value, options);
  };
  return Lazy2;
}();
Lazy.prototype.__isYupSchema__ = true;

// node_modules/yup/es/setLocale.js
init_react();

// node_modules/framer-motion/dist/framer-motion.es.js
init_react();

// node_modules/framer-motion/node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/framer-motion/dist/framer-motion.es.js
var import_react29 = __toESM(require_react());

// node_modules/framesync/dist/framesync.es.js
init_react();

// node_modules/hey-listen/dist/hey-listen.es.js
init_react();
var warning2 = function() {
};
var invariant = function() {
};
if (true) {
  warning2 = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framesync/dist/framesync.es.js
var prevTime = 0;
var onNextFrame = typeof window !== "undefined" && window.requestAnimationFrame !== void 0 ? function(callback) {
  return window.requestAnimationFrame(callback);
} : function(callback) {
  var timestamp = Date.now();
  var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
  prevTime = timestamp + timeToCall;
  setTimeout(function() {
    return callback(prevTime);
  }, timeToCall);
};
var createStep = function(setRunNextFrame) {
  var processToRun = [];
  var processToRunNextFrame = [];
  var numThisFrame = 0;
  var isProcessing2 = false;
  var i = 0;
  var cancelled = /* @__PURE__ */ new WeakSet();
  var toKeepAlive = /* @__PURE__ */ new WeakSet();
  var renderStep = {
    cancel: function(process2) {
      var indexOfCallback = processToRunNextFrame.indexOf(process2);
      cancelled.add(process2);
      if (indexOfCallback !== -1) {
        processToRunNextFrame.splice(indexOfCallback, 1);
      }
    },
    process: function(frame2) {
      var _a2;
      isProcessing2 = true;
      _a2 = [processToRunNextFrame, processToRun], processToRun = _a2[0], processToRunNextFrame = _a2[1];
      processToRunNextFrame.length = 0;
      numThisFrame = processToRun.length;
      if (numThisFrame) {
        var process_1;
        for (i = 0; i < numThisFrame; i++) {
          process_1 = processToRun[i];
          process_1(frame2);
          if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
            renderStep.schedule(process_1);
            setRunNextFrame(true);
          }
        }
      }
      isProcessing2 = false;
    },
    schedule: function(process2, keepAlive, immediate) {
      if (keepAlive === void 0) {
        keepAlive = false;
      }
      if (immediate === void 0) {
        immediate = false;
      }
      invariant(typeof process2 === "function", "Argument must be a function");
      var addToCurrentBuffer = immediate && isProcessing2;
      var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
      cancelled.delete(process2);
      if (keepAlive)
        toKeepAlive.add(process2);
      if (buffer.indexOf(process2) === -1) {
        buffer.push(process2);
        if (addToCurrentBuffer)
          numThisFrame = processToRun.length;
      }
    }
  };
  return renderStep;
};
var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1e3;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var setWillRunNextFrame = function(willRun) {
  return willRunNextFrame = willRun;
};
var steps = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
  acc[key] = createStep(setWillRunNextFrame);
  return acc;
}, {});
var sync = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
  var step = steps[key];
  acc[key] = function(process2, keepAlive, immediate) {
    if (keepAlive === void 0) {
      keepAlive = false;
    }
    if (immediate === void 0) {
      immediate = false;
    }
    if (!willRunNextFrame)
      startLoop();
    step.schedule(process2, keepAlive, immediate);
    return process2;
  };
  return acc;
}, {});
var cancelSync = /* @__PURE__ */ stepsOrder.reduce(function(acc, key) {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var processStep = function(stepId) {
  return steps[stepId].process(frame);
};
var processFrame = function(timestamp) {
  willRunNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  if (!useDefaultElapsed)
    defaultElapsed = frame.delta;
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (willRunNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = function() {
  willRunNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = function() {
  return frame;
};
var framesync_es_default = sync;

// node_modules/@popmotion/popcorn/dist/popcorn.es.js
init_react();

// node_modules/style-value-types/dist/style-value-types.es.js
init_react();

// node_modules/style-value-types/node_modules/tslib/modules/index.js
init_react();
var import_tslib2 = __toESM(require_tslib2(), 1);
var {
  __extends: __extends2,
  __assign: __assign2,
  __rest: __rest2,
  __decorate: __decorate2,
  __param: __param2,
  __metadata: __metadata2,
  __awaiter: __awaiter2,
  __generator: __generator2,
  __exportStar: __exportStar2,
  __createBinding: __createBinding2,
  __values: __values2,
  __read: __read2,
  __spread: __spread2,
  __spreadArrays: __spreadArrays2,
  __await: __await2,
  __asyncGenerator: __asyncGenerator2,
  __asyncDelegator: __asyncDelegator2,
  __asyncValues: __asyncValues2,
  __makeTemplateObject: __makeTemplateObject2,
  __importStar: __importStar2,
  __importDefault: __importDefault2,
  __classPrivateFieldGet: __classPrivateFieldGet2,
  __classPrivateFieldSet: __classPrivateFieldSet2
} = import_tslib2.default;

// node_modules/style-value-types/dist/style-value-types.es.js
var clamp = function(min5, max5) {
  return function(v) {
    return Math.max(Math.min(v, max5), min5);
  };
};
var sanitize = function(v) {
  return v % 1 ? Number(v.toFixed(5)) : v;
};
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
var number2 = {
  test: function(v) {
    return typeof v === "number";
  },
  parse: parseFloat,
  transform: function(v) {
    return v;
  }
};
var alpha = __assign2(__assign2({}, number2), { transform: clamp(0, 1) });
var scale = __assign2(__assign2({}, number2), { default: 1 });
var createUnitType = function(unit) {
  return {
    test: function(v) {
      return typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1;
    },
    parse: parseFloat,
    transform: function(v) {
      return "" + v + unit;
    }
  };
};
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = __assign2(__assign2({}, percent), { parse: function(v) {
  return percent.parse(v) / 100;
}, transform: function(v) {
  return percent.transform(v * 100);
} });
var getValueFromFunctionString = function(value) {
  return value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function(v) {
  return v.red !== void 0;
};
var isHsla = function(v) {
  return v.hue !== void 0;
};
function getValuesAsArray(value) {
  return getValueFromFunctionString(value).replace(/(,|\/)/g, " ").split(/ \s*/);
}
var splitColorValues = function(terms) {
  return function(v) {
    if (typeof v !== "string")
      return v;
    var values2 = {};
    var valuesArray = getValuesAsArray(v);
    for (var i = 0; i < 4; i++) {
      values2[terms[i]] = valuesArray[i] !== void 0 ? parseFloat(valuesArray[i]) : 1;
    }
    return values2;
  };
};
var rgbaTemplate = function(_a2) {
  var red = _a2.red, green = _a2.green, blue = _a2.blue, _b2 = _a2.alpha, alpha2 = _b2 === void 0 ? 1 : _b2;
  return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha2 + ")";
};
var hslaTemplate = function(_a2) {
  var hue = _a2.hue, saturation = _a2.saturation, lightness = _a2.lightness, _b2 = _a2.alpha, alpha2 = _b2 === void 0 ? 1 : _b2;
  return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha2 + ")";
};
var rgbUnit = __assign2(__assign2({}, number2), { transform: function(v) {
  return Math.round(clampRgbUnit(v));
} });
function isColorString(color2, colorType) {
  return color2.startsWith(colorType) && singleColorRegex.test(color2);
}
var rgba = {
  test: function(v) {
    return typeof v === "string" ? isColorString(v, "rgb") : isRgba(v);
  },
  parse: splitColorValues(["red", "green", "blue", "alpha"]),
  transform: function(_a2) {
    var red = _a2.red, green = _a2.green, blue = _a2.blue, _b2 = _a2.alpha, alpha$1 = _b2 === void 0 ? 1 : _b2;
    return rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha: sanitize(alpha.transform(alpha$1))
    });
  }
};
var hsla = {
  test: function(v) {
    return typeof v === "string" ? isColorString(v, "hsl") : isHsla(v);
  },
  parse: splitColorValues(["hue", "saturation", "lightness", "alpha"]),
  transform: function(_a2) {
    var hue = _a2.hue, saturation = _a2.saturation, lightness = _a2.lightness, _b2 = _a2.alpha, alpha$1 = _b2 === void 0 ? 1 : _b2;
    return hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(sanitize(saturation)),
      lightness: percent.transform(sanitize(lightness)),
      alpha: sanitize(alpha.transform(alpha$1))
    });
  }
};
var hex = __assign2(__assign2({}, rgba), { test: function(v) {
  return typeof v === "string" && isColorString(v, "#");
}, parse: function(v) {
  var r = "";
  var g = "";
  var b2 = "";
  if (v.length > 4) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b2 = v.substr(5, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b2 = v.substr(3, 1);
    r += r;
    g += g;
    b2 += b2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: 1
  };
} });
var color = {
  test: function(v) {
    return typeof v === "string" && singleColorRegex.test(v) || isRgba(v) || isHsla(v);
  },
  parse: function(v) {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else if (hex.test(v)) {
      return hex.parse(v);
    }
    return v;
  },
  transform: function(v) {
    if (isRgba(v)) {
      return rgba.transform(v);
    } else if (isHsla(v)) {
      return hsla.transform(v);
    }
    return v;
  }
};
var COLOR_TOKEN = "${c}";
var NUMBER_TOKEN = "${n}";
var convertNumbersToZero = function(v) {
  return typeof v === "number" ? 0 : v;
};
var complex = {
  test: function(v) {
    if (typeof v !== "string" || !isNaN(v))
      return false;
    var numValues = 0;
    var foundNumbers = v.match(floatRegex);
    var foundColors = v.match(colorRegex);
    if (foundNumbers)
      numValues += foundNumbers.length;
    if (foundColors)
      numValues += foundColors.length;
    return numValues > 0;
  },
  parse: function(v) {
    var input = v;
    var parsed = [];
    var foundColors = input.match(colorRegex);
    if (foundColors) {
      input = input.replace(colorRegex, COLOR_TOKEN);
      parsed.push.apply(parsed, foundColors.map(color.parse));
    }
    var foundNumbers = input.match(floatRegex);
    if (foundNumbers) {
      parsed.push.apply(parsed, foundNumbers.map(number2.parse));
    }
    return parsed;
  },
  createTransformer: function(prop) {
    var template = prop;
    var token = 0;
    var foundColors = prop.match(colorRegex);
    var numColors = foundColors ? foundColors.length : 0;
    if (foundColors) {
      for (var i = 0; i < numColors; i++) {
        template = template.replace(foundColors[i], COLOR_TOKEN);
        token++;
      }
    }
    var foundNumbers = template.match(floatRegex);
    var numNumbers = foundNumbers ? foundNumbers.length : 0;
    if (foundNumbers) {
      for (var i = 0; i < numNumbers; i++) {
        template = template.replace(foundNumbers[i], NUMBER_TOKEN);
        token++;
      }
    }
    return function(v) {
      var output = template;
      for (var i2 = 0; i2 < token; i2++) {
        output = output.replace(i2 < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i2 < numColors ? color.transform(v[i2]) : sanitize(v[i2]));
      }
      return output;
    };
  },
  getAnimatableNone: function(target) {
    var parsedTarget = complex.parse(target);
    var targetTransformer = complex.createTransformer(target);
    return targetTransformer(parsedTarget.map(convertNumbersToZero));
  }
};

// node_modules/@popmotion/easing/dist/easing.es.js
var easing_es_exports = {};
__export(easing_es_exports, {
  anticipate: () => anticipate,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  bounceIn: () => bounceIn,
  bounceInOut: () => bounceInOut,
  bounceOut: () => bounceOut,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  createAnticipateEasing: () => createAnticipateEasing,
  createBackIn: () => createBackIn,
  createExpoIn: () => createExpoIn,
  createMirroredEasing: () => createMirroredEasing,
  createReversedEasing: () => createReversedEasing,
  cubicBezier: () => cubicBezier,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  linear: () => linear,
  mirrored: () => mirrored,
  reversed: () => reversed
});
init_react();
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function(easing) {
  return function(p) {
    return 1 - easing(1 - p);
  };
};
var mirrored = function(easing) {
  return function(p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function(power) {
  return function(p) {
    return Math.pow(p, power);
  };
};
var createBackIn = function(power) {
  return function(p) {
    return p * p * ((power + 1) * p - power);
  };
};
var createAnticipateEasing = function(power) {
  var backEasing = createBackIn(power);
  return function(p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};
var linear = function(p) {
  return p;
};
var easeIn = /* @__PURE__ */ createExpoIn(2);
var easeOut = /* @__PURE__ */ reversed(easeIn);
var easeInOut = /* @__PURE__ */ mirrored(easeIn);
var circIn = function(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = /* @__PURE__ */ reversed(circIn);
var circInOut = /* @__PURE__ */ mirrored(circOut);
var backIn = /* @__PURE__ */ createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /* @__PURE__ */ reversed(backIn);
var backInOut = /* @__PURE__ */ mirrored(backIn);
var anticipate = /* @__PURE__ */ createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = function(p) {
  var p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function(p) {
  return 1 - bounceOut(1 - p);
};
var bounceInOut = function(p) {
  return p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1 / (K_SPLINE_TABLE_SIZE - 1);
var FLOAT_32_SUPPORTED = typeof Float32Array !== "undefined";
var a = function(a1, a2) {
  return 1 - 3 * a2 + 3 * a1;
};
var b = function(a1, a2) {
  return 3 * a2 - 6 * a1;
};
var c = function(a1) {
  return 3 * a1;
};
var getSlope = function(t, a1, a2) {
  return 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
};
var calcBezier = function(t, a1, a2) {
  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
  var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
  var binarySubdivide = function(aX, aA, aB) {
    var i = 0;
    var currentX;
    var currentT;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  };
  var newtonRaphsonIterate = function(aX, aGuessT) {
    var i = 0;
    var currentSlope = 0;
    var currentX;
    for (; i < NEWTON_ITERATIONS; ++i) {
      currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  var calcSampleValues = function() {
    for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
      sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
    }
  };
  var getTForX = function(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = K_SPLINE_TABLE_SIZE - 1;
    var dist = 0;
    var guessForT = 0;
    var initialSlope = 0;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += K_SAMPLE_STEP_SIZE;
    }
    --currentSample;
    dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
    initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
    }
  };
  calcSampleValues();
  var resolver = function(aX) {
    var returnValue;
    if (mX1 === mY1 && mX2 === mY2) {
      returnValue = aX;
    } else if (aX === 0) {
      returnValue = 0;
    } else if (aX === 1) {
      returnValue = 1;
    } else {
      returnValue = calcBezier(getTForX(aX), mY1, mY2);
    }
    return returnValue;
  };
  return resolver;
}

// node_modules/@popmotion/popcorn/dist/popcorn.es.js
var zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};
var isNum = function(v) {
  return typeof v === "number";
};
var curryRange = function(func2) {
  return function(min5, max5, v) {
    return v !== void 0 ? func2(min5, max5, v) : function(cv) {
      return func2(min5, max5, cv);
    };
  };
};
var clamp2 = function(min5, max5, v) {
  return Math.min(Math.max(v, min5), max5);
};
var clamp$1 = curryRange(clamp2);
var isPoint = function(point2) {
  return point2.hasOwnProperty("x") && point2.hasOwnProperty("y");
};
var isPoint3D = function(point2) {
  return isPoint(point2) && point2.hasOwnProperty("z");
};
var distance1D = function(a2, b2) {
  return Math.abs(a2 - b2);
};
var distance = function(a2, b2) {
  if (b2 === void 0) {
    b2 = zeroPoint;
  }
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    var xDelta = distance1D(a2.x, b2.x);
    var yDelta = distance1D(a2.y, b2.y);
    var zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
  return 0;
};
var progress = function(from2, to, value) {
  var toFromDifference = to - from2;
  return toFromDifference === 0 ? 1 : (value - from2) / toFromDifference;
};
var mix = function(from2, to, progress2) {
  return -progress2 * from2 + progress2 * to + from2;
};
var __assign3 = function() {
  __assign3 = Object.assign || function __assign7(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var mixLinearColor = function(from2, to, v) {
  var fromExpo = from2 * from2;
  var toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = function(v) {
  return colorTypes.find(function(type) {
    return type.test(v);
  });
};
var notAnimatable = function(color$$1) {
  return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function(from2, to) {
  var fromColorType = getColorType(from2);
  var toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from2));
  invariant(!!toColorType, notAnimatable(to));
  invariant(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var fromColor = fromColorType.parse(from2);
  var toColor = toColorType.parse(to);
  var blended = __assign3({}, fromColor);
  var mixFunc = fromColorType === hsla ? mix : mixLinearColor;
  return function(v) {
    for (var key in blended) {
      if (key !== "alpha") {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};
var combineFunctions = function(a2, b2) {
  return function(v) {
    return b2(a2(v));
  };
};
var pipe = function() {
  var transformers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    transformers[_i] = arguments[_i];
  }
  return transformers.reduce(combineFunctions);
};
function getMixer(origin, target) {
  if (isNum(origin)) {
    return function(v) {
      return mix(origin, target, v);
    };
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = function(from2, to) {
  var output = from2.slice();
  var numValues = output.length;
  var blendValue = from2.map(function(fromThis, i) {
    return getMixer(fromThis, to[i]);
  });
  return function(v) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
function analyse(value) {
  var parsed = complex.parse(value);
  var numValues = parsed.length;
  var numNumbers = 0;
  var numRGB = 0;
  var numHSL = 0;
  for (var i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = function(origin, target) {
  var template = complex.createTransformer(target);
  var originStats = analyse(origin);
  var targetStats = analyse(target);
  invariant(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
  return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};
var identity2 = function(v) {
  return v;
};
var springForce = function(alterDisplacement) {
  if (alterDisplacement === void 0) {
    alterDisplacement = identity2;
  }
  return curryRange(function(constant, origin, v) {
    var displacement = origin - v;
    var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
  });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);
var velocityPerFrame = function(xps, frameDuration) {
  return isNum(xps) ? xps / (1e3 / frameDuration) : 0;
};
var velocityPerSecond = function(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
};
var wrap = function(min5, max5, v) {
  var rangeSize = max5 - min5;
  return ((v - min5) % rangeSize + rangeSize) % rangeSize + min5;
};
var wrap$1 = curryRange(wrap);
var clampProgress = clamp$1(0, 1);

// node_modules/stylefire/dist/stylefire.es.js
init_react();

// node_modules/stylefire/node_modules/tslib/modules/index.js
init_react();
var import_tslib4 = __toESM(require_tslib3(), 1);
var {
  __extends: __extends3,
  __assign: __assign4,
  __rest: __rest3,
  __decorate: __decorate3,
  __param: __param3,
  __metadata: __metadata3,
  __awaiter: __awaiter3,
  __generator: __generator3,
  __exportStar: __exportStar3,
  __createBinding: __createBinding3,
  __values: __values3,
  __read: __read3,
  __spread: __spread3,
  __spreadArrays: __spreadArrays3,
  __await: __await3,
  __asyncGenerator: __asyncGenerator3,
  __asyncDelegator: __asyncDelegator3,
  __asyncValues: __asyncValues3,
  __makeTemplateObject: __makeTemplateObject3,
  __importStar: __importStar3,
  __importDefault: __importDefault3,
  __classPrivateFieldGet: __classPrivateFieldGet3,
  __classPrivateFieldSet: __classPrivateFieldSet3
} = import_tslib4.default;

// node_modules/stylefire/dist/stylefire.es.js
var createStyler = function(_a2) {
  var onRead2 = _a2.onRead, onRender2 = _a2.onRender, _b2 = _a2.uncachedValues, uncachedValues = _b2 === void 0 ? /* @__PURE__ */ new Set() : _b2, _c = _a2.useCache, useCache = _c === void 0 ? true : _c;
  return function(_a3) {
    if (_a3 === void 0) {
      _a3 = {};
    }
    var props = __rest3(_a3, []);
    var state = {};
    var changedValues = [];
    var hasChanged = false;
    function setValue(key, value) {
      if (key.startsWith("--")) {
        props.hasCSSVariable = true;
      }
      var currentValue = state[key];
      state[key] = value;
      if (state[key] === currentValue)
        return;
      if (changedValues.indexOf(key) === -1) {
        changedValues.push(key);
      }
      if (!hasChanged) {
        hasChanged = true;
        framesync_es_default.render(styler.render);
      }
    }
    var styler = {
      get: function(key, forceRead) {
        if (forceRead === void 0) {
          forceRead = false;
        }
        var useCached = !forceRead && useCache && !uncachedValues.has(key) && state[key] !== void 0;
        return useCached ? state[key] : onRead2(key, props);
      },
      set: function(values2, value) {
        if (typeof values2 === "string") {
          setValue(values2, value);
        } else {
          for (var key in values2) {
            setValue(key, values2[key]);
          }
        }
        return this;
      },
      render: function(forceRender) {
        if (forceRender === void 0) {
          forceRender = false;
        }
        if (hasChanged || forceRender === true) {
          onRender2(state, props, changedValues);
          hasChanged = false;
          changedValues.length = 0;
        }
        return this;
      }
    };
    return styler;
  };
};
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var camelCache = /* @__PURE__ */ new Map();
var dashCache = /* @__PURE__ */ new Map();
var prefixes2 = ["Webkit", "Moz", "O", "ms", ""];
var numPrefixes = prefixes2.length;
var isBrowser = typeof document !== "undefined";
var testElement;
var setDashPrefix = function(key, prefixed) {
  return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function(key) {
  testElement = testElement || document.createElement("div");
  for (var i = 0; i < numPrefixes; i++) {
    var prefix = prefixes2[i];
    var noPrefix = prefix === "";
    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
    if (prefixedPropertyName in testElement.style || noPrefix) {
      if (noPrefix && key === "clipPath" && dashCache.has(key)) {
        return;
      }
      camelCache.set(key, prefixedPropertyName);
      setDashPrefix(key, (noPrefix ? "" : "-") + camelToDash(prefixedPropertyName));
    }
  }
};
var setServerProperty = function(key) {
  return setDashPrefix(key, key);
};
var prefixer = function(key, asDashCase) {
  if (asDashCase === void 0) {
    asDashCase = false;
  }
  var cache2 = asDashCase ? dashCache : camelCache;
  if (!cache2.has(key)) {
    isBrowser ? testPrefix(key) : setServerProperty(key);
  }
  return cache2.get(key) || key;
};
var axes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew", "transformPerspective"];
var transformProps = /* @__PURE__ */ order.reduce(function(acc, key) {
  return axes.reduce(function(axesAcc, axesKey) {
    axesAcc.push(key + axesKey);
    return axesAcc;
  }, acc);
}, ["x", "y", "z"]);
var transformPropDictionary = /* @__PURE__ */ transformProps.reduce(function(dict, key) {
  dict[key] = true;
  return dict;
}, {});
function isTransformProp(key) {
  return transformPropDictionary[key] === true;
}
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
var int = /* @__PURE__ */ __assign4(/* @__PURE__ */ __assign4({}, number2), { transform: Math.round });
var valueTypes = {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
var getValueType = function(key) {
  return valueTypes[key];
};
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};
var SCROLL_LEFT = "scrollLeft";
var SCROLL_TOP = "scrollTop";
var scrollKeys = /* @__PURE__ */ new Set([SCROLL_LEFT, SCROLL_TOP]);
var blacklist = /* @__PURE__ */ new Set([SCROLL_LEFT, SCROLL_TOP, "transform"]);
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
function isCustomTemplate(v) {
  return typeof v === "function";
}
function buildTransform(state, transform2, transformKeys3, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
  if (allowTransformNone === void 0) {
    allowTransformNone = true;
  }
  var transformString = "";
  var transformHasZ = false;
  transformKeys3.sort(sortTransformProps);
  var numTransformKeys = transformKeys3.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys3[i];
    transformString += (translateAlias[key] || key) + "(" + transform2[key] + ") ";
    transformHasZ = key === "z" ? true : transformHasZ;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (isCustomTemplate(state.transform)) {
    transformString = state.transform(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildStyleProperty(state, enableHardwareAcceleration, styles2, transform2, transformOrigin, transformKeys3, isDashCase, allowTransformNone) {
  if (enableHardwareAcceleration === void 0) {
    enableHardwareAcceleration = true;
  }
  if (styles2 === void 0) {
    styles2 = {};
  }
  if (transform2 === void 0) {
    transform2 = {};
  }
  if (transformOrigin === void 0) {
    transformOrigin = {};
  }
  if (transformKeys3 === void 0) {
    transformKeys3 = [];
  }
  if (isDashCase === void 0) {
    isDashCase = false;
  }
  if (allowTransformNone === void 0) {
    allowTransformNone = true;
  }
  var transformIsDefault = true;
  var hasTransform = false;
  var hasTransformOrigin = false;
  for (var key in state) {
    var value = state[key];
    var valueType = getValueType(key);
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform = true;
      transform2[key] = valueAsType;
      transformKeys3.push(key);
      if (transformIsDefault) {
        if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
          transformIsDefault = false;
        }
      }
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
      styles2[prefixer(key, isDashCase)] = valueAsType;
    }
  }
  if (hasTransform || typeof state.transform === "function") {
    styles2.transform = buildTransform(state, transform2, transformKeys3, transformIsDefault, enableHardwareAcceleration, allowTransformNone);
  }
  if (hasTransformOrigin) {
    styles2.transformOrigin = (transformOrigin.originX || "50%") + " " + (transformOrigin.originY || "50%") + " " + (transformOrigin.originZ || 0);
  }
  return styles2;
}
function createStyleBuilder(_a2) {
  var _b2 = _a2 === void 0 ? {} : _a2, _c = _b2.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b2.isDashCase, isDashCase = _d === void 0 ? true : _d, _e = _b2.allowTransformNone, allowTransformNone = _e === void 0 ? true : _e;
  var styles2 = {};
  var transform2 = {};
  var transformOrigin = {};
  var transformKeys3 = [];
  return function(state) {
    transformKeys3.length = 0;
    buildStyleProperty(state, enableHardwareAcceleration, styles2, transform2, transformOrigin, transformKeys3, isDashCase, allowTransformNone);
    return styles2;
  };
}
function onRead(key, options) {
  var element = options.element, preparseOutput = options.preparseOutput;
  var defaultValueType = getValueType(key);
  if (isTransformProp(key)) {
    return defaultValueType ? defaultValueType.default || 0 : 0;
  } else if (scrollKeys.has(key)) {
    return element[key];
  } else {
    var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
    return preparseOutput && defaultValueType && defaultValueType.test(domValue) && defaultValueType.parse ? defaultValueType.parse(domValue) : domValue;
  }
}
function onRender(state, _a2, changedValues) {
  var element = _a2.element, buildStyles = _a2.buildStyles, hasCSSVariable = _a2.hasCSSVariable;
  Object.assign(element.style, buildStyles(state));
  if (hasCSSVariable) {
    var numChangedValues = changedValues.length;
    for (var i = 0; i < numChangedValues; i++) {
      var key = changedValues[i];
      if (key.startsWith("--")) {
        element.style.setProperty(key, state[key]);
      }
    }
  }
  if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
    element[SCROLL_LEFT] = state[SCROLL_LEFT];
  }
  if (changedValues.indexOf(SCROLL_TOP) !== -1) {
    element[SCROLL_TOP] = state[SCROLL_TOP];
  }
}
var cssStyler = /* @__PURE__ */ createStyler({
  onRead,
  onRender,
  uncachedValues: scrollKeys
});
function createCssStyler(element, _a2) {
  if (_a2 === void 0) {
    _a2 = {};
  }
  var enableHardwareAcceleration = _a2.enableHardwareAcceleration, allowTransformNone = _a2.allowTransformNone, props = __rest3(_a2, ["enableHardwareAcceleration", "allowTransformNone"]);
  return cssStyler(__assign4({ element, buildStyles: createStyleBuilder({
    enableHardwareAcceleration,
    allowTransformNone
  }), preparseOutput: true }, props));
}
var camelCaseAttributes = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues"]);
var defaultOrigin = 0.5;
var svgAttrsTemplate = function() {
  return {
    style: {}
  };
};
var progressToPixels = function(progress2, length2) {
  return px.transform(progress2 * length2);
};
var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
function calcOrigin(origin, offset2, size) {
  return typeof origin === "string" ? origin : px.transform(offset2 + size * origin);
}
function calculateSVGTransformOrigin(dimensions, originX, originY) {
  return calcOrigin(originX, dimensions.x, dimensions.width) + " " + calcOrigin(originY, dimensions.y, dimensions.height);
}
var svgStyleConfig = {
  enableHardwareAcceleration: false,
  isDashCase: false
};
function buildSVGAttrs(_a2, dimensions, totalPathLength, cssBuilder, attrs, isDashCase) {
  if (dimensions === void 0) {
    dimensions = unmeasured;
  }
  if (cssBuilder === void 0) {
    cssBuilder = createStyleBuilder(svgStyleConfig);
  }
  if (attrs === void 0) {
    attrs = svgAttrsTemplate();
  }
  if (isDashCase === void 0) {
    isDashCase = true;
  }
  var attrX = _a2.attrX, attrY = _a2.attrY, originX = _a2.originX, originY = _a2.originY, pathLength = _a2.pathLength, _b2 = _a2.pathSpacing, pathSpacing = _b2 === void 0 ? 1 : _b2, _c = _a2.pathOffset, pathOffset = _c === void 0 ? 0 : _c, state = __rest3(_a2, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  var style = cssBuilder(state);
  for (var key in style) {
    if (key === "transform") {
      attrs.style.transform = style[key];
    } else {
      var attrKey = isDashCase && !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      attrs[attrKey] = style[key];
    }
  }
  if (originX !== void 0 || originY !== void 0 || style.transform) {
    attrs.style.transformOrigin = calculateSVGTransformOrigin(dimensions, originX !== void 0 ? originX : defaultOrigin, originY !== void 0 ? originY : defaultOrigin);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (totalPathLength !== void 0 && pathLength !== void 0) {
    attrs[isDashCase ? "stroke-dashoffset" : "strokeDashoffset"] = progressToPixels(-pathOffset, totalPathLength);
    attrs[isDashCase ? "stroke-dasharray" : "strokeDasharray"] = progressToPixels(pathLength, totalPathLength) + " " + progressToPixels(pathSpacing, totalPathLength);
  }
  return attrs;
}
function createAttrBuilder(dimensions, totalPathLength, isDashCase) {
  if (isDashCase === void 0) {
    isDashCase = true;
  }
  var attrs = svgAttrsTemplate();
  var cssBuilder = createStyleBuilder(svgStyleConfig);
  return function(state) {
    return buildSVGAttrs(state, dimensions, totalPathLength, cssBuilder, attrs, isDashCase);
  };
}
var getDimensions = function(element) {
  return typeof element.getBBox === "function" ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function(element) {
  try {
    return getDimensions(element);
  } catch (e) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
};
var isPath = function(element) {
  return element.tagName === "path";
};
var svgStyler = /* @__PURE__ */ createStyler({
  onRead: function(key, _a2) {
    var element = _a2.element;
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    if (!isTransformProp(key)) {
      return element.getAttribute(key);
    } else {
      var valueType = getValueType(key);
      return valueType ? valueType.default || 0 : 0;
    }
  },
  onRender: function(state, _a2) {
    var element = _a2.element, buildAttrs = _a2.buildAttrs;
    var attrs = buildAttrs(state);
    for (var key in attrs) {
      if (key === "style") {
        Object.assign(element.style, attrs.style);
      } else {
        element.setAttribute(key, attrs[key]);
      }
    }
  }
});
var svg = function(element) {
  var dimensions = getSVGElementDimensions(element);
  var pathLength = isPath(element) && element.getTotalLength ? element.getTotalLength() : void 0;
  return svgStyler({
    element,
    buildAttrs: createAttrBuilder(dimensions, pathLength)
  });
};
var viewport = /* @__PURE__ */ createStyler({
  useCache: false,
  onRead: function(key) {
    return key === "scrollTop" ? window.pageYOffset : window.pageXOffset;
  },
  onRender: function(_a2) {
    var _b2 = _a2.scrollTop, scrollTop = _b2 === void 0 ? 0 : _b2, _c = _a2.scrollLeft, scrollLeft = _c === void 0 ? 0 : _c;
    return window.scrollTo(scrollLeft, scrollTop);
  }
});
var cache = /* @__PURE__ */ new WeakMap();
var isHTMLElement = function(node2) {
  return node2 instanceof HTMLElement || typeof node2.click === "function";
};
var isSVGElement = function(node2) {
  return node2 instanceof SVGElement || "ownerSVGElement" in node2;
};
var createDOMStyler = function(node2, props) {
  var styler;
  if (node2 === window) {
    styler = viewport(node2);
  } else if (isHTMLElement(node2)) {
    styler = createCssStyler(node2, props);
  } else if (isSVGElement(node2)) {
    styler = svg(node2);
  }
  invariant(styler !== void 0, "No valid node provided. Node must be HTMLElement, SVGElement or window.");
  cache.set(node2, styler);
  return styler;
};
var getStyler = function(node2, props) {
  return cache.has(node2) ? cache.get(node2) : createDOMStyler(node2, props);
};
function index(nodeOrSelector, props) {
  var node2 = typeof nodeOrSelector === "string" ? document.querySelector(nodeOrSelector) : nodeOrSelector;
  return getStyler(node2, props);
}
var stylefire_es_default = index;

// node_modules/popmotion/dist/popmotion.es.js
init_react();

// node_modules/popmotion/node_modules/tslib/modules/index.js
init_react();
var import_tslib6 = __toESM(require_tslib4(), 1);
var {
  __extends: __extends4,
  __assign: __assign5,
  __rest: __rest4,
  __decorate: __decorate4,
  __param: __param4,
  __metadata: __metadata4,
  __awaiter: __awaiter4,
  __generator: __generator4,
  __exportStar: __exportStar4,
  __createBinding: __createBinding4,
  __values: __values4,
  __read: __read4,
  __spread: __spread4,
  __spreadArrays: __spreadArrays4,
  __await: __await4,
  __asyncGenerator: __asyncGenerator4,
  __asyncDelegator: __asyncDelegator4,
  __asyncValues: __asyncValues4,
  __makeTemplateObject: __makeTemplateObject4,
  __importStar: __importStar4,
  __importDefault: __importDefault4,
  __classPrivateFieldGet: __classPrivateFieldGet4,
  __classPrivateFieldSet: __classPrivateFieldSet4
} = import_tslib6.default;

// node_modules/popmotion/dist/popmotion.es.js
var Observer = /* @__PURE__ */ function() {
  function Observer2(_a2, observer) {
    var _this = this;
    var middleware = _a2.middleware, onComplete = _a2.onComplete;
    this.isActive = true;
    this.update = function(v) {
      if (_this.observer.update)
        _this.updateObserver(v);
    };
    this.complete = function() {
      if (_this.observer.complete && _this.isActive)
        _this.observer.complete();
      if (_this.onComplete)
        _this.onComplete();
      _this.isActive = false;
    };
    this.error = function(err) {
      if (_this.observer.error && _this.isActive)
        _this.observer.error(err);
      _this.isActive = false;
    };
    this.observer = observer;
    this.updateObserver = function(v) {
      return observer.update(v);
    };
    this.onComplete = onComplete;
    if (observer.update && middleware && middleware.length) {
      middleware.forEach(function(m) {
        return _this.updateObserver = m(_this.updateObserver, _this.complete);
      });
    }
  }
  return Observer2;
}();
var createObserver = function(observerCandidate, _a2, onComplete) {
  var middleware = _a2.middleware;
  if (typeof observerCandidate === "function") {
    return new Observer({ middleware, onComplete }, { update: observerCandidate });
  } else {
    return new Observer({ middleware, onComplete }, observerCandidate);
  }
};
var Action = /* @__PURE__ */ function() {
  function Action2(props) {
    if (props === void 0) {
      props = {};
    }
    this.props = props;
  }
  Action2.prototype.create = function(props) {
    return new Action2(props);
  };
  Action2.prototype.start = function(observerCandidate) {
    if (observerCandidate === void 0) {
      observerCandidate = {};
    }
    var isComplete = false;
    var subscription = {
      stop: function() {
        return void 0;
      }
    };
    var _a2 = this.props, init = _a2.init, observerProps = __rest4(_a2, ["init"]);
    var observer = createObserver(observerCandidate, observerProps, function() {
      isComplete = true;
      subscription.stop();
    });
    var api = init(observer);
    subscription = api ? __assign5({}, subscription, api) : subscription;
    if (isComplete)
      subscription.stop();
    return subscription;
  };
  Action2.prototype.applyMiddleware = function(middleware) {
    return this.create(__assign5({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
  };
  Action2.prototype.pipe = function() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      funcs[_i] = arguments[_i];
    }
    var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
    return this.applyMiddleware(function(update) {
      return function(v) {
        return update(pipedUpdate(v));
      };
    });
  };
  return Action2;
}();
var action = function(init) {
  return new Action({ init });
};
var createVectorTests = function(typeTests) {
  var testNames = Object.keys(typeTests);
  var isVectorProp = function(prop, key) {
    return prop !== void 0 && !typeTests[key](prop);
  };
  var getVectorKeys = function(props) {
    return testNames.reduce(function(vectorKeys, key) {
      if (isVectorProp(props[key], key))
        vectorKeys.push(key);
      return vectorKeys;
    }, []);
  };
  var testVectorProps = function(props) {
    return props && testNames.some(function(key) {
      return isVectorProp(props[key], key);
    });
  };
  return { getVectorKeys, testVectorProps };
};
var unitTypes = [px, percent, degrees, vh, vw];
var findUnitType = function(prop) {
  return unitTypes.find(function(type) {
    return type.test(prop);
  });
};
var isUnitProp = function(prop) {
  return Boolean(findUnitType(prop));
};
var createAction = function(action2, props) {
  return action2(props);
};
var createUnitAction = function(action2, _a2) {
  var from2 = _a2.from, to = _a2.to, props = __rest4(_a2, ["from", "to"]);
  var unitType = findUnitType(from2) || findUnitType(to);
  var transform2 = unitType.transform, parse2 = unitType.parse;
  return action2(__assign5({}, props, { from: typeof from2 === "string" ? parse2(from2) : from2, to: typeof to === "string" ? parse2(to) : to })).pipe(transform2);
};
var createMixerAction = function(mixer) {
  return function(action2, _a2) {
    var from2 = _a2.from, to = _a2.to, props = __rest4(_a2, ["from", "to"]);
    return action2(__assign5({}, props, { from: 0, to: 1 })).pipe(mixer(from2, to));
  };
};
var createColorAction = /* @__PURE__ */ createMixerAction(mixColor);
var createComplexAction = /* @__PURE__ */ createMixerAction(mixComplex);
var createVectorAction = function(action2, typeTests) {
  var _a2 = createVectorTests(typeTests), testVectorProps = _a2.testVectorProps, getVectorKeys = _a2.getVectorKeys;
  var vectorAction = function(props) {
    var isVector = testVectorProps(props);
    if (!isVector)
      return action2(props);
    var vectorKeys = getVectorKeys(props);
    var testKey = vectorKeys[0];
    var testProp = props[testKey];
    return getActionCreator(testProp)(action2, props, vectorKeys);
  };
  return vectorAction;
};
var getActionCreator = function(prop) {
  if (typeof prop === "number") {
    return createAction;
  } else if (isUnitProp(prop)) {
    return createUnitAction;
  } else if (color.test(prop)) {
    return createColorAction;
  } else if (complex.test(prop)) {
    return createComplexAction;
  } else {
    return createAction;
  }
};
var decay = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a2) {
    var complete = _a2.complete, update = _a2.update;
    var _b2 = props.velocity, velocity = _b2 === void 0 ? 0 : _b2, _c = props.from, from2 = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
    var elapsed = 0;
    var amplitude = power * velocity;
    var idealTarget = Math.round(from2 + amplitude);
    var target = typeof modifyTarget === "undefined" ? idealTarget : modifyTarget(idealTarget);
    var process2 = framesync_es_default.update(function(_a3) {
      var frameDelta = _a3.delta;
      elapsed += frameDelta;
      var delta = -amplitude * Math.exp(-elapsed / timeConstant);
      var isMoving = delta > restDelta || delta < -restDelta;
      var current = isMoving ? target + delta : target;
      update(current);
      if (!isMoving) {
        cancelSync.update(process2);
        complete();
      }
    }, true);
    return {
      stop: function() {
        return cancelSync.update(process2);
      }
    };
  });
};
var vectorDecay = /* @__PURE__ */ createVectorAction(decay, {
  from: number2.test,
  modifyTarget: function(func2) {
    return typeof func2 === "function";
  },
  velocity: number2.test
});
var spring = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a2) {
    var update = _a2.update, complete = _a2.complete;
    var _b2 = props.velocity, velocity = _b2 === void 0 ? 0 : _b2;
    var _c = props.from, from2 = _c === void 0 ? 0 : _c, _d = props.to, to = _d === void 0 ? 0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
    var initialVelocity = velocity ? -(velocity / 1e3) : 0;
    var t = 0;
    var delta = to - from2;
    var position = from2;
    var prevPosition = position;
    var process2 = framesync_es_default.update(function(_a3) {
      var timeDelta = _a3.delta;
      t += timeDelta;
      var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      var angularFreq = Math.sqrt(stiffness / mass) / 1e3;
      prevPosition = position;
      if (dampingRatio < 1) {
        var envelope = Math.exp(-dampingRatio * angularFreq * t);
        var expoDecay = angularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
      } else {
        var envelope = Math.exp(-angularFreq * t);
        position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
      }
      velocity = velocityPerSecond(position - prevPosition, timeDelta);
      var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
      var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
      if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
        position = to;
        update(position);
        cancelSync.update(process2);
        complete();
      } else {
        update(position);
      }
    }, true);
    return {
      stop: function() {
        return cancelSync.update(process2);
      }
    };
  });
};
var vectorSpring = /* @__PURE__ */ createVectorAction(spring, {
  from: number2.test,
  to: number2.test,
  stiffness: number2.test,
  damping: number2.test,
  mass: number2.test,
  velocity: number2.test
});
var inertia = function(_a2) {
  var _b2 = _a2.from, from2 = _b2 === void 0 ? 0 : _b2, _c = _a2.velocity, velocity = _c === void 0 ? 0 : _c, min5 = _a2.min, max5 = _a2.max, _d = _a2.power, power = _d === void 0 ? 0.8 : _d, _e = _a2.timeConstant, timeConstant = _e === void 0 ? 700 : _e, _f = _a2.bounceStiffness, bounceStiffness = _f === void 0 ? 500 : _f, _g = _a2.bounceDamping, bounceDamping = _g === void 0 ? 10 : _g, _h = _a2.restDelta, restDelta = _h === void 0 ? 1 : _h, modifyTarget = _a2.modifyTarget;
  return action(function(_a3) {
    var update = _a3.update, complete = _a3.complete;
    var prev = from2;
    var current = from2;
    var activeAnimation;
    var isSpring = false;
    var isLessThanMin = function(v) {
      return min5 !== void 0 && v <= min5;
    };
    var isMoreThanMax = function(v) {
      return max5 !== void 0 && v >= max5;
    };
    var isOutOfBounds = function(v) {
      return isLessThanMin(v) || isMoreThanMax(v);
    };
    var isTravellingAwayFromBounds = function(v, currentVelocity) {
      return isLessThanMin(v) && currentVelocity < 0 || isMoreThanMax(v) && currentVelocity > 0;
    };
    var onUpdate = function(v) {
      update(v);
      prev = current;
      current = v;
      velocity = velocityPerSecond(current - prev, getFrameData().delta);
      if (activeAnimation && !isSpring && isTravellingAwayFromBounds(v, velocity)) {
        startSpring({ from: v, velocity });
      }
    };
    var startAnimation2 = function(animation2, next) {
      activeAnimation && activeAnimation.stop();
      activeAnimation = animation2.start({
        update: onUpdate,
        complete: function() {
          if (next) {
            next();
            return;
          }
          complete();
        }
      });
    };
    var startSpring = function(props) {
      isSpring = true;
      startAnimation2(vectorSpring(__assign5({}, props, { to: isLessThanMin(props.from) ? min5 : max5, stiffness: bounceStiffness, damping: bounceDamping, restDelta })));
    };
    if (isOutOfBounds(from2)) {
      startSpring({ from: from2, velocity });
    } else if (velocity !== 0) {
      var animation = vectorDecay({
        from: from2,
        velocity,
        timeConstant,
        power,
        restDelta: isOutOfBounds(from2) ? 20 : restDelta,
        modifyTarget
      });
      startAnimation2(animation, function() {
        if (isOutOfBounds(current)) {
          startSpring({ from: current, velocity });
        } else {
          complete();
        }
      });
    } else {
      complete();
    }
    return {
      stop: function() {
        return activeAnimation && activeAnimation.stop();
      }
    };
  });
};
var index2 = /* @__PURE__ */ createVectorAction(inertia, {
  from: number2.test,
  velocity: number2.test,
  min: number2.test,
  max: number2.test,
  damping: number2.test,
  stiffness: number2.test,
  modifyTarget: function(func2) {
    return typeof func2 === "function";
  }
});
var scrubber = function(_a2) {
  var _b2 = _a2.from, from2 = _b2 === void 0 ? 0 : _b2, _c = _a2.to, to = _c === void 0 ? 1 : _c, _d = _a2.ease, ease = _d === void 0 ? linear : _d, _e = _a2.reverseEase, reverseEase = _e === void 0 ? false : _e;
  if (reverseEase) {
    ease = createReversedEasing(ease);
  }
  return action(function(_a3) {
    var update = _a3.update;
    return {
      seek: function(progress2) {
        return update(progress2);
      }
    };
  }).pipe(ease, function(v) {
    return mix(from2, to, v);
  });
};
var vectorScrubber = /* @__PURE__ */ createVectorAction(scrubber, {
  ease: function(func2) {
    return typeof func2 === "function";
  },
  from: number2.test,
  to: number2.test
});
var clampProgress2 = /* @__PURE__ */ clamp$1(0, 1);
var tween = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a2) {
    var update = _a2.update, complete = _a2.complete;
    var _b2 = props.duration, duration = _b2 === void 0 ? 300 : _b2, _c = props.ease, ease = _c === void 0 ? easeOut : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f, _g = props.repeatDelay, repeatDelay = _g === void 0 ? 0 : _g;
    var _h = props.from, from2 = _h === void 0 ? 0 : _h, _j = props.to, to = _j === void 0 ? 1 : _j, _k = props.elapsed, elapsed = _k === void 0 ? 0 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
    var playhead = vectorScrubber({ from: from2, to, ease }).start(update);
    var currentProgress = 0;
    var process2;
    var isActive = false;
    var reverseAnimation = function(reverseEase) {
      var _a3;
      if (reverseEase === void 0) {
        reverseEase = false;
      }
      _a3 = [to, from2], from2 = _a3[0], to = _a3[1];
      playhead = vectorScrubber({ from: from2, to, ease, reverseEase }).start(update);
    };
    var isTweenComplete = function() {
      var isComplete = isActive && elapsed > duration + repeatDelay;
      if (!isComplete)
        return false;
      if (isComplete && !loop && !flip && !yoyo)
        return true;
      var overtime = elapsed - duration;
      elapsed = overtime - repeatDelay;
      if (loop && loopCount < loop) {
        loopCount++;
        return false;
      } else if (flip && flipCount < flip) {
        flipCount++;
        reverseAnimation();
        return false;
      } else if (yoyo && yoyoCount < yoyo) {
        yoyoCount++;
        reverseAnimation(yoyoCount % 2 !== 0);
        return false;
      }
      return true;
    };
    var updateTween = function() {
      currentProgress = clampProgress2(progress(0, duration, elapsed));
      playhead.seek(currentProgress);
    };
    var startTimer = function() {
      isActive = true;
      process2 = framesync_es_default.update(function(_a3) {
        var delta = _a3.delta;
        elapsed += delta;
        updateTween();
        if (isTweenComplete()) {
          cancelSync.update(process2);
          complete && framesync_es_default.update(complete, false, true);
        }
      }, true);
    };
    var stopTimer = function() {
      isActive = false;
      if (process2)
        cancelSync.update(process2);
    };
    startTimer();
    return {
      isActive: function() {
        return isActive;
      },
      getElapsed: function() {
        return clamp$1(0, duration, elapsed);
      },
      getProgress: function() {
        return currentProgress;
      },
      stop: function() {
        stopTimer();
      },
      pause: function() {
        stopTimer();
        return this;
      },
      resume: function() {
        if (!isActive)
          startTimer();
        return this;
      },
      seek: function(newProgress) {
        elapsed = mix(0, duration, newProgress);
        framesync_es_default.update(updateTween, false, true);
        return this;
      },
      reverse: function() {
        reverseAnimation();
        return this;
      }
    };
  });
};
var clampProgress$1 = /* @__PURE__ */ clamp$1(0, 1);
var defaultEasings = function(values2, easing) {
  return values2.map(function() {
    return easing || easeOut;
  }).splice(0, values2.length - 1);
};
var defaultTimings = function(values2) {
  var numValues = values2.length;
  return values2.map(function(value, i) {
    return i !== 0 ? i / (numValues - 1) : 0;
  });
};
var interpolateScrubbers = function(input, scrubbers, update) {
  var rangeLength = input.length;
  var finalInputIndex = rangeLength - 1;
  var finalScrubberIndex = finalInputIndex - 1;
  var subs = scrubbers.map(function(scrub) {
    return scrub.start(update);
  });
  return function(v) {
    if (v <= input[0]) {
      subs[0].seek(0);
    }
    if (v >= input[finalInputIndex]) {
      subs[finalScrubberIndex].seek(1);
    }
    var i = 1;
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalInputIndex)
        break;
    }
    var progressInRange = progress(input[i - 1], input[i], v);
    subs[i - 1].seek(clampProgress$1(progressInRange));
  };
};
var keyframes = function(_a2) {
  var easings = _a2.easings, _b2 = _a2.ease, ease = _b2 === void 0 ? linear : _b2, times = _a2.times, values2 = _a2.values, tweenProps = __rest4(_a2, ["easings", "ease", "times", "values"]);
  easings = Array.isArray(easings) ? easings : defaultEasings(values2, easings);
  times = times || defaultTimings(values2);
  var scrubbers = easings.map(function(easing, i) {
    return vectorScrubber({
      from: values2[i],
      to: values2[i + 1],
      ease: easing
    });
  });
  return tween(__assign5({}, tweenProps, { ease })).applyMiddleware(function(update) {
    return interpolateScrubbers(times, scrubbers, update);
  });
};
var physics = function(props) {
  if (props === void 0) {
    props = {};
  }
  return action(function(_a2) {
    var complete = _a2.complete, update = _a2.update;
    var _b2 = props.acceleration, acceleration = _b2 === void 0 ? 0 : _b2, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
    var _e = props.restSpeed, restSpeed = _e === void 0 ? 1e-3 : _e, _f = props.from, from2 = _f === void 0 ? 0 : _f;
    var current = from2;
    var process2 = framesync_es_default.update(function(_a3) {
      var delta = _a3.delta;
      var elapsed = Math.max(delta, 16);
      if (acceleration)
        velocity += velocityPerFrame(acceleration, elapsed);
      if (friction)
        velocity *= Math.pow(1 - friction, elapsed / 100);
      if (springStrength !== void 0 && to !== void 0) {
        var distanceToTarget = to - current;
        velocity += distanceToTarget * velocityPerFrame(springStrength, elapsed);
      }
      current += velocityPerFrame(velocity, elapsed);
      update(current);
      var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
      if (isComplete) {
        cancelSync.update(process2);
        complete();
      }
    }, true);
    return {
      set: function(v) {
        current = v;
        return this;
      },
      setAcceleration: function(v) {
        acceleration = v;
        return this;
      },
      setFriction: function(v) {
        friction = v;
        return this;
      },
      setSpringStrength: function(v) {
        springStrength = v;
        return this;
      },
      setSpringTarget: function(v) {
        to = v;
        return this;
      },
      setVelocity: function(v) {
        velocity = v;
        return this;
      },
      stop: function() {
        return cancelSync.update(process2);
      }
    };
  });
};
var vectorPhysics = /* @__PURE__ */ createVectorAction(physics, {
  acceleration: number2.test,
  friction: number2.test,
  velocity: number2.test,
  from: number2.test,
  to: number2.test,
  springStrength: number2.test
});
var listen = function(element, events, options) {
  return action(function(_a2) {
    var update = _a2.update;
    var eventNames = events.split(" ").map(function(eventName) {
      element.addEventListener(eventName, update, options);
      return eventName;
    });
    return {
      stop: function() {
        return eventNames.forEach(function(eventName) {
          return element.removeEventListener(eventName, update, options);
        });
      }
    };
  });
};
var defaultPointerPos = function() {
  return {
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0
  };
};
var eventToPoint = function(e, point2) {
  if (point2 === void 0) {
    point2 = defaultPointerPos();
  }
  point2.clientX = point2.x = e.clientX;
  point2.clientY = point2.y = e.clientY;
  point2.pageX = e.pageX;
  point2.pageY = e.pageY;
  return point2;
};
var points = [/* @__PURE__ */ defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== "undefined") {
  updatePointsLocation = function(_a2) {
    var touches = _a2.touches;
    isTouchDevice = true;
    var numTouches = touches.length;
    points.length = 0;
    for (var i = 0; i < numTouches; i++) {
      var thisTouch = touches[i];
      points.push(eventToPoint(thisTouch));
    }
  };
  listen(document, "touchstart touchmove", {
    passive: true,
    capture: true
  }).start(updatePointsLocation);
}
var updatePointsLocation;
var point = /* @__PURE__ */ defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== "undefined") {
  updatePointLocation = function(e) {
    isMouseDevice = true;
    eventToPoint(e, point);
  };
  listen(document, "mousedown mousemove", true).start(updatePointLocation);
}
var updatePointLocation;
var delay = function(timeToDelay) {
  return action(function(_a2) {
    var complete = _a2.complete;
    var timeout = setTimeout(complete, timeToDelay);
    return {
      stop: function() {
        return clearTimeout(timeout);
      }
    };
  });
};

// node_modules/framer-motion/dist/framer-motion.es.js
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init, _a2) {
    var _this = this;
    var _b2 = _a2 === void 0 ? {} : _a2, transformer = _b2.transformer, parent = _b2.parent;
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = _this.transformer ? _this.transformer(v) : v;
      if (_this.updateSubscribers && _this.prev !== _this.current) {
        _this.updateSubscribers.forEach(_this.notifySubscriber);
      }
      if (_this.children) {
        _this.children.forEach(_this.setChild);
      }
      if (render && _this.renderSubscribers) {
        _this.renderSubscribers.forEach(_this.notifySubscriber);
      }
      var _a3 = getFrameData(), delta = _a3.delta, timestamp = _a3.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        framesync_es_default.postRender(_this.scheduleVelocityCheck);
      }
    };
    this.notifySubscriber = function(subscriber) {
      subscriber(_this.current);
    };
    this.scheduleVelocityCheck = function() {
      return framesync_es_default.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a3) {
      var timestamp = _a3.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
      }
    };
    this.setChild = function(child) {
      return child.set(_this.current);
    };
    this.parent = parent;
    this.transformer = transformer;
    this.set(init, false);
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.addChild = function(config) {
    if (config === void 0) {
      config = {};
    }
    var child = new MotionValue2(this.current, __assign({ parent: this }, config));
    if (!this.children)
      this.children = /* @__PURE__ */ new Set();
    this.children.add(child);
    return child;
  };
  MotionValue2.prototype.removeChild = function(child) {
    if (!this.children) {
      return;
    }
    this.children.delete(child);
  };
  MotionValue2.prototype.subscribeTo = function(subscriptions, subscription) {
    var _this = this;
    var updateSubscriber = function() {
      return subscription(_this.current);
    };
    subscriptions.add(updateSubscriber);
    return function() {
      return subscriptions.delete(updateSubscriber);
    };
  };
  MotionValue2.prototype.onChange = function(subscription) {
    if (!this.updateSubscribers)
      this.updateSubscribers = /* @__PURE__ */ new Set();
    return this.subscribeTo(this.updateSubscribers, subscription);
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    if (!this.renderSubscribers)
      this.renderSubscribers = /* @__PURE__ */ new Set();
    this.notifySubscriber(subscription);
    return this.subscribeTo(this.renderSubscribers, subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve2) {
      _this.stopAnimation = animation(resolve2);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers && this.updateSubscribers.clear();
    this.renderSubscribers && this.renderSubscribers.clear();
    this.parent && this.parent.removeChild(this);
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init, opts) {
  return new MotionValue(init, opts);
}
function useConstant(init) {
  var ref = (0, import_react29.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
var isMotionValue = function(value) {
  return value instanceof MotionValue;
};
var updateStyler = createStyler({
  onRead: function() {
    return null;
  },
  onRender: function(state, _a2) {
    var onUpdate = _a2.onUpdate;
    return onUpdate(state);
  }
});
var MotionValuesMap = function() {
  function MotionValuesMap2() {
    this.hasMounted = false;
    this.values = /* @__PURE__ */ new Map();
    this.unsubscribers = /* @__PURE__ */ new Map();
  }
  MotionValuesMap2.prototype.has = function(key) {
    return this.values.has(key);
  };
  MotionValuesMap2.prototype.set = function(key, value) {
    this.values.set(key, value);
    if (this.hasMounted) {
      this.bindValueToOutput(key, value);
    }
  };
  MotionValuesMap2.prototype.get = function(key, defaultValue) {
    var value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = new MotionValue(defaultValue);
      this.set(key, value);
    }
    return value;
  };
  MotionValuesMap2.prototype.forEach = function(callback) {
    return this.values.forEach(callback);
  };
  MotionValuesMap2.prototype.bindValueToOutput = function(key, value) {
    var _this = this;
    var onRender2 = function(v) {
      return _this.output && _this.output(key, v);
    };
    var unsubscribeOnRender = value.onRenderRequest(onRender2);
    var onChange = function(v) {
      _this.onUpdate && _this.onUpdate.set(key, v);
    };
    var unsubscribeOnChange = value.onChange(onChange);
    if (this.unsubscribers.has(key)) {
      this.unsubscribers.get(key)();
    }
    this.unsubscribers.set(key, function() {
      unsubscribeOnRender();
      unsubscribeOnChange();
    });
  };
  MotionValuesMap2.prototype.setOnUpdate = function(onUpdate) {
    this.onUpdate = void 0;
    if (onUpdate) {
      this.onUpdate = updateStyler({ onUpdate });
    }
  };
  MotionValuesMap2.prototype.setTransformTemplate = function(transformTemplate) {
    if (this.transformTemplate !== transformTemplate) {
      this.transformTemplate = transformTemplate;
      this.updateTransformTemplate();
    }
  };
  MotionValuesMap2.prototype.getTransformTemplate = function() {
    return this.transformTemplate;
  };
  MotionValuesMap2.prototype.updateTransformTemplate = function() {
    if (this.output) {
      this.output("transform", this.transformTemplate);
    }
  };
  MotionValuesMap2.prototype.mount = function(output) {
    var _this = this;
    this.hasMounted = true;
    if (output)
      this.output = output;
    this.values.forEach(function(value, key) {
      return _this.bindValueToOutput(key, value);
    });
    this.updateTransformTemplate();
  };
  MotionValuesMap2.prototype.unmount = function() {
    var _this = this;
    this.values.forEach(function(_value, key) {
      var unsubscribe = _this.unsubscribers.get(key);
      unsubscribe && unsubscribe();
    });
  };
  return MotionValuesMap2;
}();
var specialMotionValueProps = /* @__PURE__ */ new Set(["dragOriginX", "dragOriginY"]);
var useMotionValues = function(props) {
  var motionValues = useConstant(function() {
    var map = new MotionValuesMap();
    for (var key in props) {
      if (isMotionValue(props[key]) && !specialMotionValueProps.has(key)) {
        map.set(key, props[key]);
      }
    }
    return map;
  });
  motionValues.setOnUpdate(props.onUpdate);
  motionValues.setTransformTemplate(props.transformTemplate);
  return motionValues;
};
var session = null;
var syncRenderSession = {
  isOpen: function() {
    return session !== null;
  },
  open: function() {
    invariant(!session, "Sync render session already open");
    session = [];
  },
  flush: function() {
    invariant(session !== null, "No sync render session found");
    session && session.forEach(function(styler) {
      return styler.render();
    });
    session = null;
  },
  push: function(styler) {
    invariant(session !== null, "No sync render session found");
    session && session.push(styler);
  }
};
var MountComponent = function(_a2) {
  var ref = _a2.innerRef, values2 = _a2.values, isStatic = _a2.isStatic;
  (0, import_react29.useEffect)(function() {
    invariant(ref.current instanceof Element, "No `ref` found. Ensure components created with `motion.custom` forward refs using `React.forwardRef`");
    var domStyler = stylefire_es_default(ref.current, {
      preparseOutput: false,
      enableHardwareAcceleration: !isStatic
    });
    values2.mount(function(key, value) {
      domStyler.set(key, value);
      if (syncRenderSession.isOpen()) {
        syncRenderSession.push(domStyler);
      }
    });
    return function() {
      return values2.unmount();
    };
  }, []);
  return null;
};
var Mount = (0, import_react29.memo)(MountComponent);
var createValueResolver = function(resolver) {
  return function(values2) {
    var resolvedValues = {};
    values2.forEach(function(value, key) {
      return resolvedValues[key] = resolver(value);
    });
    return resolvedValues;
  };
};
var resolveCurrent = createValueResolver(function(value) {
  return value.get();
});
var transformOriginProps2 = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
var isTransformOriginProp2 = function(key) {
  return transformOriginProps2.has(key);
};
var buildStyleAttr = function(values2, styleProp, isStatic) {
  var motionValueStyles = resolveCurrent(values2);
  var transformTemplate = values2.getTransformTemplate();
  if (transformTemplate) {
    motionValueStyles.transform = styleProp.transform ? transformTemplate({}, styleProp.transform) : transformTemplate;
  }
  return buildStyleProperty(__assign(__assign({}, styleProp), motionValueStyles), !isStatic);
};
var useMotionStyles = function(values2, styleProp, isStatic, transformValues) {
  if (styleProp === void 0) {
    styleProp = {};
  }
  var style = {};
  var prevMotionStyles = (0, import_react29.useRef)({}).current;
  for (var key in styleProp) {
    var thisStyle = styleProp[key];
    if (isMotionValue(thisStyle)) {
      values2.set(key, thisStyle);
    } else if (!isStatic && (isTransformProp(key) || isTransformOriginProp2(key))) {
      if (!values2.has(key)) {
        values2.set(key, motionValue(thisStyle));
      } else {
        if (thisStyle !== prevMotionStyles[key]) {
          var value = values2.get(key);
          value.set(thisStyle);
        }
      }
      prevMotionStyles[key] = thisStyle;
    } else {
      style[key] = thisStyle;
    }
  }
  return transformValues ? transformValues(style) : style;
};
var isKeyframesTarget = function(v) {
  return Array.isArray(v);
};
var resolveFinalValueInKeyframes = function(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
var auto = {
  test: function(v) {
    return v === "auto";
  },
  parse: function(v) {
    return v;
  }
};
var dimensionTypes = [number2, px, percent, degrees, vw, vh, auto];
var valueTypes2 = __spreadArrays(dimensionTypes, [color, complex]);
var testValueType = function(v) {
  return function(type) {
    return type.test(v);
  };
};
var getDimensionValueType = function(v) {
  return dimensionTypes.find(testValueType(v));
};
var getValueType2 = function(v) {
  return valueTypes2.find(testValueType(v));
};
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
};
var overDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 700,
    damping: to === 0 ? 100 : 35
  };
};
var linearTween = function() {
  return {
    ease: "linear",
    duration: 0.3
  };
};
var keyframes2 = function(values2) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: values2
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: overDampedSpring,
  scaleY: overDampedSpring,
  scale: overDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: overDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes2;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign({ to }, transitionFactory(to));
};
var just = function(_a2) {
  var to = _a2.to, duration = _a2.duration;
  return action(function(_a3) {
    var update = _a3.update, complete = _a3.complete;
    update(to);
    duration ? delay(duration).start({ complete }) : complete();
  });
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var x1 = definition[0], y1 = definition[1], x2 = definition[2], y2 = definition[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easing_es_exports[definition] !== void 0, "Invalid easing type '" + definition + "'");
    return easing_es_exports[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};
var isDurationAnimation = function(v) {
  return v.hasOwnProperty("duration") || v.hasOwnProperty("repeatDelay");
};
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};
var transitions = { tween, spring: vectorSpring, keyframes, inertia: index2, just };
var transitionOptionParser = {
  tween: function(opts) {
    if (opts.ease) {
      var ease = isEasingArray(opts.ease) ? opts.ease[0] : opts.ease;
      opts.ease = easingDefinitionToFunction(ease);
    }
    return opts;
  },
  keyframes: function(_a2) {
    var from2 = _a2.from, to = _a2.to, velocity = _a2.velocity, opts = __rest(_a2, ["from", "to", "velocity"]);
    if (opts.values && opts.values[0] === null) {
      var values2 = __spreadArrays(opts.values);
      values2[0] = from2;
      opts.values = values2;
    }
    if (opts.ease) {
      opts.easings = isEasingArray(opts.ease) ? opts.ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(opts.ease);
    }
    opts.ease = linear;
    return opts;
  }
};
var isTransitionDefined = function(_a2) {
  var when2 = _a2.when, delay2 = _a2.delay, delayChildren = _a2.delayChildren, staggerChildren = _a2.staggerChildren, staggerDirection = _a2.staggerDirection, transition = __rest(_a2, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection"]);
  return Object.keys(transition).length;
};
var getTransitionDefinition = function(key, to, transitionDefinition) {
  var delay2 = transitionDefinition ? transitionDefinition.delay : 0;
  if (transitionDefinition === void 0 || !isTransitionDefined(transitionDefinition)) {
    return __assign({ delay: delay2 }, getDefaultTransition(key, to));
  }
  var valueTransitionDefinition = transitionDefinition[key] || transitionDefinition.default || transitionDefinition;
  if (valueTransitionDefinition.type === false) {
    return {
      delay: valueTransitionDefinition.hasOwnProperty("delay") ? valueTransitionDefinition.delay : delay2,
      to: isKeyframesTarget(to) ? to[to.length - 1] : to,
      type: "just"
    };
  } else if (isKeyframesTarget(to)) {
    return __assign(__assign({ values: to, duration: 0.8, delay: delay2, ease: "linear" }, valueTransitionDefinition), {
      type: "keyframes"
    });
  } else {
    return __assign({
      type: "tween",
      to,
      delay: delay2
    }, valueTransitionDefinition);
  }
};
var preprocessOptions = function(type, opts) {
  return transitionOptionParser[type] ? transitionOptionParser[type](opts) : opts;
};
var getAnimation = function(key, value, target, transition) {
  var origin = value.get();
  var isOriginAnimatable = isAnimatable(key, origin);
  var isTargetAnimatable = isAnimatable(key, target);
  warning2(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + ' from "' + origin + '" to ' + target + '. "' + origin + '" is not an animatable value - to enable this animation set ' + origin + " to a value animatable to " + target + " via the `style` property.");
  var _a2 = getTransitionDefinition(key, target, transition), _b2 = _a2.type, type = _b2 === void 0 ? "tween" : _b2, transitionDefinition = __rest(_a2, ["type"]);
  var actionFactory = isOriginAnimatable && isTargetAnimatable ? transitions[type] : just;
  var opts = preprocessOptions(type, __assign({ from: origin, velocity: value.getVelocity() }, transitionDefinition));
  if (isDurationAnimation(opts)) {
    if (opts.duration) {
      opts.duration = secondsToMilliseconds(opts.duration);
    }
    if (opts.repeatDelay) {
      opts.repeatDelay = secondsToMilliseconds(opts.repeatDelay);
    }
  }
  return [actionFactory, opts];
};
function startAnimation(key, value, target, _a2) {
  var _b2 = _a2.delay, delay$1 = _b2 === void 0 ? 0 : _b2, transition = __rest(_a2, ["delay"]);
  return value.start(function(complete) {
    var activeAnimation;
    var _a3 = getAnimation(key, value, target, transition), animationFactory = _a3[0], _b3 = _a3[1], valueDelay = _b3.delay, options = __rest(_b3, ["delay"]);
    if (valueDelay !== void 0) {
      delay$1 = valueDelay;
    }
    var animate = function() {
      var animation = animationFactory(options);
      activeAnimation = animation.start({
        update: function(v) {
          return value.set(v);
        },
        complete
      });
    };
    if (delay$1) {
      activeAnimation = delay(secondsToMilliseconds(delay$1)).start({
        complete: animate
      });
    } else {
      animate();
    }
    return function() {
      if (activeAnimation)
        activeAnimation.stop();
    };
  });
}
var getCurrent = function(values2) {
  var current = {};
  values2.forEach(function(value, key) {
    return current[key] = value.get();
  });
  return current;
};
var getVelocity = function(values2) {
  var velocity = {};
  values2.forEach(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
};
var isTargetResolver = function(p) {
  return typeof p === "function";
};
var isVariantLabels = function(v) {
  return Array.isArray(v);
};
var isNumericalString = function(v) {
  return /^\d*\.?\d+$/.test(v);
};
var ValueAnimationControls = function() {
  function ValueAnimationControls2(_a2) {
    var _this = this;
    var values2 = _a2.values, readValueFromSource = _a2.readValueFromSource, makeTargetAnimatable = _a2.makeTargetAnimatable;
    this.props = {};
    this.variants = {};
    this.baseTarget = {};
    this.overrides = [];
    this.resolvedOverrides = [];
    this.activeOverrides = /* @__PURE__ */ new Set();
    this.isAnimating = /* @__PURE__ */ new Set();
    this.hasValue = function(key) {
      return !_this.values.has(key);
    };
    this.values = values2;
    this.readValueFromSource = readValueFromSource;
    this.makeTargetAnimatable = makeTargetAnimatable;
    this.values.forEach(function(value, key) {
      return _this.baseTarget[key] = value.get();
    });
  }
  ValueAnimationControls2.prototype.setProps = function(props) {
    this.props = props;
  };
  ValueAnimationControls2.prototype.setVariants = function(variants) {
    if (variants)
      this.variants = variants;
  };
  ValueAnimationControls2.prototype.setDefaultTransition = function(transition) {
    if (transition)
      this.defaultTransition = transition;
  };
  ValueAnimationControls2.prototype.setValues = function(definition, _a2) {
    var _this = this;
    var _b2 = _a2 === void 0 ? {} : _a2, _c = _b2.isActive, isActive = _c === void 0 ? /* @__PURE__ */ new Set() : _c, priority = _b2.priority;
    var _d = this.resolveVariant(definition), target = _d.target, transitionEnd = _d.transitionEnd;
    target = this.transformValues(__assign(__assign({}, target), transitionEnd));
    return Object.keys(target).forEach(function(key) {
      if (isActive.has(key))
        return;
      isActive.add(key);
      if (target) {
        var targetValue = resolveFinalValueInKeyframes(target[key]);
        if (_this.values.has(key)) {
          var value = _this.values.get(key);
          value && value.set(targetValue);
        } else {
          _this.values.set(key, motionValue(targetValue));
        }
        if (!priority)
          _this.baseTarget[key] = targetValue;
      }
    });
  };
  ValueAnimationControls2.prototype.transformValues = function(values2) {
    var transformValues = this.props.transformValues;
    return transformValues ? transformValues(values2) : values2;
  };
  ValueAnimationControls2.prototype.checkForNewValues = function(target) {
    var newValueKeys = Object.keys(target).filter(this.hasValue);
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
      return;
    for (var i = 0; i < numNewValues; i++) {
      var key = newValueKeys[i];
      var targetValue = target[key];
      var value = null;
      if (Array.isArray(targetValue)) {
        value = targetValue[0];
      }
      if (value === null) {
        value = this.readValueFromSource(key);
        invariant(value !== null, 'No initial value for "' + key + '" can be inferred. Ensure an initial value for "' + key + '" is defined on the component.');
      }
      if (typeof value === "string" && isNumericalString(value)) {
        value = parseFloat(value);
      } else if (!getValueType2(value) && complex.test(targetValue)) {
        value = complex.getAnimatableNone(targetValue);
      }
      this.values.set(key, motionValue(value));
      this.baseTarget[key] = value;
    }
  };
  ValueAnimationControls2.prototype.resolveVariant = function(variant) {
    if (!variant) {
      return {
        target: void 0,
        transition: void 0,
        transitionEnd: void 0
      };
    }
    if (isTargetResolver(variant)) {
      variant = variant(this.props.custom, getCurrent(this.values), getVelocity(this.values));
    }
    var _a2 = variant.transition, transition = _a2 === void 0 ? this.defaultTransition : _a2, transitionEnd = variant.transitionEnd, target = __rest(variant, ["transition", "transitionEnd"]);
    return { transition, transitionEnd, target };
  };
  ValueAnimationControls2.prototype.getHighestPriority = function() {
    if (!this.activeOverrides.size)
      return 0;
    return Math.max.apply(Math, Array.from(this.activeOverrides));
  };
  ValueAnimationControls2.prototype.setOverride = function(definition, overrideIndex) {
    this.overrides[overrideIndex] = definition;
    if (this.children) {
      this.children.forEach(function(child) {
        return child.setOverride(definition, overrideIndex);
      });
    }
  };
  ValueAnimationControls2.prototype.startOverride = function(overrideIndex) {
    var override = this.overrides[overrideIndex];
    if (override) {
      return this.start(override, { priority: overrideIndex });
    }
  };
  ValueAnimationControls2.prototype.clearOverride = function(overrideIndex) {
    var _this = this;
    if (this.children) {
      this.children.forEach(function(child) {
        return child.clearOverride(overrideIndex);
      });
    }
    var override = this.overrides[overrideIndex];
    if (!override)
      return;
    this.activeOverrides.delete(overrideIndex);
    var highest = this.getHighestPriority();
    this.resetIsAnimating();
    if (highest) {
      var highestOverride = this.overrides[highest];
      highestOverride && this.startOverride(highest);
    }
    var overrideTarget = this.resolvedOverrides[overrideIndex];
    if (!overrideTarget)
      return;
    var remainingValues = {};
    for (var key in this.baseTarget) {
      if (overrideTarget[key] !== void 0) {
        remainingValues[key] = this.baseTarget[key];
      }
    }
    this.onStart();
    this.animate(remainingValues).then(function() {
      return _this.onComplete();
    });
  };
  ValueAnimationControls2.prototype.apply = function(definition) {
    if (Array.isArray(definition)) {
      return this.applyVariantLabels(definition);
    } else if (typeof definition === "string") {
      return this.applyVariantLabels([definition]);
    } else {
      this.setValues(definition);
    }
  };
  ValueAnimationControls2.prototype.applyVariantLabels = function(variantLabelList) {
    var _this = this;
    var isActive = /* @__PURE__ */ new Set();
    var reversedList = __spreadArrays(variantLabelList).reverse();
    reversedList.forEach(function(key) {
      var _a2 = _this.resolveVariant(_this.variants[key]), target = _a2.target, transitionEnd = _a2.transitionEnd;
      if (transitionEnd) {
        _this.setValues(transitionEnd, { isActive });
      }
      if (target) {
        _this.setValues(target, { isActive });
      }
      if (_this.children && _this.children.size) {
        _this.children.forEach(function(child) {
          return child.applyVariantLabels(variantLabelList);
        });
      }
    });
  };
  ValueAnimationControls2.prototype.start = function(definition, opts) {
    var _this = this;
    if (opts === void 0) {
      opts = {};
    }
    if (opts.priority) {
      this.activeOverrides.add(opts.priority);
    }
    this.resetIsAnimating(opts.priority);
    var animation;
    if (isVariantLabels(definition)) {
      animation = this.animateVariantLabels(definition, opts);
    } else if (typeof definition === "string") {
      animation = this.animateVariant(definition, opts);
    } else {
      animation = this.animate(definition, opts);
    }
    this.onStart();
    return animation.then(function() {
      return _this.onComplete();
    });
  };
  ValueAnimationControls2.prototype.animate = function(animationDefinition, _a2) {
    var _this = this;
    var _b2 = _a2 === void 0 ? {} : _a2, _c = _b2.delay, delay2 = _c === void 0 ? 0 : _c, _d = _b2.priority, priority = _d === void 0 ? 0 : _d, transitionOverride = _b2.transitionOverride;
    var _e = this.resolveVariant(animationDefinition), target = _e.target, transition = _e.transition, transitionEnd = _e.transitionEnd;
    if (transitionOverride) {
      transition = transitionOverride;
    }
    if (!target)
      return Promise.resolve();
    target = this.transformValues(target);
    if (transitionEnd) {
      transitionEnd = this.transformValues(transitionEnd);
    }
    this.checkForNewValues(target);
    if (this.makeTargetAnimatable) {
      var animatable = this.makeTargetAnimatable(target, transitionEnd);
      target = animatable.target;
      transitionEnd = animatable.transitionEnd;
    }
    if (priority) {
      this.resolvedOverrides[priority] = target;
    }
    this.checkForNewValues(target);
    var animations = [];
    for (var key in target) {
      var value = this.values.get(key);
      if (!value || !target || target[key] === void 0)
        continue;
      var valueTarget = target[key];
      if (!priority) {
        this.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
      }
      if (this.isAnimating.has(key))
        continue;
      this.isAnimating.add(key);
      animations.push(startAnimation(key, value, valueTarget, __assign({ delay: delay2 }, transition)));
    }
    var allAnimations = Promise.all(animations);
    return transitionEnd ? allAnimations.then(function() {
      _this.setValues(transitionEnd, { priority });
    }) : allAnimations;
  };
  ValueAnimationControls2.prototype.animateVariantLabels = function(variantLabels, opts) {
    var _this = this;
    var animations = __spreadArrays(variantLabels).reverse().map(function(label2) {
      return _this.animateVariant(label2, opts);
    });
    return Promise.all(animations);
  };
  ValueAnimationControls2.prototype.animateVariant = function(variantLabel, opts) {
    var _this = this;
    var when2 = false;
    var delayChildren = 0;
    var staggerChildren = 0;
    var staggerDirection = 1;
    var priority = opts && opts.priority || 0;
    var variant = this.variants[variantLabel];
    var getAnimations = variant ? function() {
      return _this.animate(variant, opts);
    } : function() {
      return Promise.resolve();
    };
    var getChildrenAnimations = this.children ? function() {
      return _this.animateChildren(variantLabel, delayChildren, staggerChildren, staggerDirection, priority);
    } : function() {
      return Promise.resolve();
    };
    if (variant && this.children) {
      var transition = this.resolveVariant(variant).transition;
      if (transition) {
        when2 = transition.when || when2;
        delayChildren = transition.delayChildren || delayChildren;
        staggerChildren = transition.staggerChildren || staggerChildren;
        staggerDirection = transition.staggerDirection || staggerDirection;
      }
    }
    if (when2) {
      var _a2 = when2 === "beforeChildren" ? [getAnimations, getChildrenAnimations] : [getChildrenAnimations, getAnimations], first = _a2[0], last = _a2[1];
      return first().then(last);
    } else {
      return Promise.all([getAnimations(), getChildrenAnimations()]);
    }
  };
  ValueAnimationControls2.prototype.animateChildren = function(variantLabel, delayChildren, staggerChildren, staggerDirection, priority) {
    if (delayChildren === void 0) {
      delayChildren = 0;
    }
    if (staggerChildren === void 0) {
      staggerChildren = 0;
    }
    if (staggerDirection === void 0) {
      staggerDirection = 1;
    }
    if (priority === void 0) {
      priority = 0;
    }
    if (!this.children) {
      return Promise.resolve();
    }
    var animations = [];
    var maxStaggerDuration = (this.children.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1 ? function(i) {
      return i * staggerChildren;
    } : function(i) {
      return maxStaggerDuration - i * staggerChildren;
    };
    Array.from(this.children).forEach(function(childControls, i) {
      var animation = childControls.animateVariant(variantLabel, {
        priority,
        delay: delayChildren + generateStaggerDuration(i)
      });
      animations.push(animation);
    });
    return Promise.all(animations);
  };
  ValueAnimationControls2.prototype.onStart = function() {
    var onAnimationStart = this.props.onAnimationStart;
    onAnimationStart && onAnimationStart();
  };
  ValueAnimationControls2.prototype.onComplete = function() {
    var onAnimationComplete = this.props.onAnimationComplete;
    onAnimationComplete && onAnimationComplete();
  };
  ValueAnimationControls2.prototype.checkOverrideIsAnimating = function(priority) {
    var numOverrides = this.overrides.length;
    for (var i = priority + 1; i < numOverrides; i++) {
      var resolvedOverride = this.resolvedOverrides[i];
      if (resolvedOverride) {
        for (var key in resolvedOverride) {
          this.isAnimating.add(key);
        }
      }
    }
  };
  ValueAnimationControls2.prototype.resetIsAnimating = function(priority) {
    if (priority === void 0) {
      priority = 0;
    }
    this.isAnimating.clear();
    if (priority < this.getHighestPriority()) {
      this.checkOverrideIsAnimating(priority);
    }
    if (this.children) {
      this.children.forEach(function(child) {
        return child.resetIsAnimating(priority);
      });
    }
  };
  ValueAnimationControls2.prototype.stop = function() {
    this.values.forEach(function(value) {
      return value.stop();
    });
  };
  ValueAnimationControls2.prototype.addChild = function(controls) {
    if (!this.children) {
      this.children = /* @__PURE__ */ new Set();
    }
    this.children.add(controls);
    this.overrides.forEach(function(override, i) {
      override && controls.setOverride(override, i);
    });
  };
  ValueAnimationControls2.prototype.removeChild = function(controls) {
    if (!this.children) {
      return;
    }
    this.children.delete(controls);
  };
  ValueAnimationControls2.prototype.resetChildren = function() {
    if (this.children)
      this.children.clear();
  };
  return ValueAnimationControls2;
}();
function useInitialOrEveryRender(callback, isInitialOnly) {
  if (isInitialOnly === void 0) {
    isInitialOnly = false;
  }
  var isInitialRender = (0, import_react29.useRef)(true);
  if (!isInitialOnly || isInitialOnly && isInitialRender.current) {
    callback();
  }
  isInitialRender.current = false;
}
var AnimationControls = function() {
  function AnimationControls2() {
    this.hasMounted = false;
    this.pendingAnimations = [];
    this.componentControls = /* @__PURE__ */ new Set();
  }
  AnimationControls2.prototype.setVariants = function(variants) {
    this.variants = variants;
    this.componentControls.forEach(function(controls) {
      return controls.setVariants(variants);
    });
  };
  AnimationControls2.prototype.setDefaultTransition = function(transition) {
    this.defaultTransition = transition;
    this.componentControls.forEach(function(controls) {
      return controls.setDefaultTransition(transition);
    });
  };
  AnimationControls2.prototype.subscribe = function(controls) {
    var _this = this;
    this.componentControls.add(controls);
    if (this.variants)
      controls.setVariants(this.variants);
    if (this.defaultTransition)
      controls.setDefaultTransition(this.defaultTransition);
    return function() {
      return _this.componentControls.delete(controls);
    };
  };
  AnimationControls2.prototype.start = function(definition, transitionOverride) {
    var _this = this;
    if (this.hasMounted) {
      var animations_1 = [];
      this.componentControls.forEach(function(controls) {
        var animation = controls.start(definition, {
          transitionOverride
        });
        animations_1.push(animation);
      });
      return Promise.all(animations_1);
    } else {
      return new Promise(function(resolve2) {
        _this.pendingAnimations.push({
          animation: [definition, transitionOverride],
          resolve: resolve2
        });
      });
    }
  };
  AnimationControls2.prototype.set = function(definition) {
    invariant(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
    return this.componentControls.forEach(function(controls) {
      return controls.apply(definition);
    });
  };
  AnimationControls2.prototype.stop = function() {
    this.componentControls.forEach(function(controls) {
      return controls.stop();
    });
  };
  AnimationControls2.prototype.mount = function() {
    var _this = this;
    this.hasMounted = true;
    this.pendingAnimations.forEach(function(_a2) {
      var animation = _a2.animation, resolve2 = _a2.resolve;
      return _this.start.apply(_this, animation).then(resolve2);
    });
  };
  AnimationControls2.prototype.unmount = function() {
    this.hasMounted = false;
    this.stop();
  };
  return AnimationControls2;
}();
var PresenceContext = (0, import_react29.createContext)(null);
var MotionContext = (0, import_react29.createContext)({
  static: false
});
var isVariantLabel = function(v) {
  return typeof v === "string" || Array.isArray(v);
};
var isAnimationControls = function(v) {
  return v instanceof AnimationControls;
};
var useMotionContext = function(parentContext, controls, values2, isStatic, _a2) {
  if (isStatic === void 0) {
    isStatic = false;
  }
  var initial = _a2.initial, animate = _a2.animate, variants = _a2.variants, whileTap = _a2.whileTap, whileHover = _a2.whileHover;
  var _b2;
  var presenceContext = (0, import_react29.useContext)(PresenceContext);
  if (((_b2 = presenceContext) === null || _b2 === void 0 ? void 0 : _b2.initial) !== void 0) {
    initial = presenceContext.initial;
  }
  var initialState;
  if (initial === false && !isAnimationControls(animate)) {
    initialState = animate;
  } else if (typeof initial !== "boolean") {
    initialState = initial;
  }
  var hasMounted = (0, import_react29.useRef)(false);
  var shouldPropagateControls = variants || isVariantLabel(animate) || isVariantLabel(whileTap) || isVariantLabel(whileHover) || isAnimationControls(animate);
  var targetInitial = isVariantLabel(initialState) ? initialState : parentContext.initial;
  var targetAnimate = isVariantLabel(animate) ? animate : parentContext.animate;
  var initialDependency = isStatic ? targetInitial : null;
  var animateDependency = shouldPropagateControls && isVariantLabel(targetAnimate) ? targetAnimate : null;
  var context = (0, import_react29.useMemo)(function() {
    return {
      controls: shouldPropagateControls ? controls : parentContext.controls,
      initial: targetInitial,
      animate: targetAnimate,
      values: values2,
      hasMounted,
      isReducedMotion: parentContext.isReducedMotion
    };
  }, [initialDependency, animateDependency, parentContext.isReducedMotion]);
  context.static = isStatic;
  useInitialOrEveryRender(function() {
    var initialToApply = initialState || parentContext.initial;
    initialToApply && controls.apply(initialToApply);
  }, !isStatic);
  (0, import_react29.useEffect)(function() {
    hasMounted.current = true;
  }, []);
  return context;
};
function useValueAnimationControls(config, props, subscribeToParentControls) {
  var variants = props.variants, transition = props.transition;
  var parentControls = (0, import_react29.useContext)(MotionContext).controls;
  var presenceContext = (0, import_react29.useContext)(PresenceContext);
  var controls = useConstant(function() {
    return new ValueAnimationControls(config);
  });
  if (!presenceContext || presenceContext.isPresent) {
    controls.resetChildren();
    controls.setProps(props);
    controls.setVariants(variants);
    controls.setDefaultTransition(transition);
  }
  (0, import_react29.useEffect)(function() {
    if (subscribeToParentControls && parentControls) {
      parentControls.addChild(controls);
    }
  });
  (0, import_react29.useEffect)(function() {
    return function() {
      var onAnimationComplete = props.onAnimationComplete, unmountProps = __rest(props, ["onAnimationComplete"]);
      controls.setProps(unmountProps);
      parentControls && parentControls.removeChild(controls);
    };
  }, []);
  return controls;
}
var checkShouldInheritVariant = function(_a2) {
  var animate = _a2.animate, variants = _a2.variants, _b2 = _a2.inherit, inherit = _b2 === void 0 ? true : _b2;
  return inherit && !!variants && (!animate || animate instanceof AnimationControls);
};
function useExternalRef(externalRef) {
  var ref = !externalRef || typeof externalRef === "function" ? (0, import_react29.useRef)(null) : externalRef;
  if (externalRef && typeof externalRef === "function") {
    (0, import_react29.useEffect)(function() {
      externalRef(ref.current);
      return function() {
        return externalRef(null);
      };
    }, []);
  }
  return ref;
}
var createMotionComponent = function(_a2) {
  var getValueControlsConfig = _a2.getValueControlsConfig, loadFunctionalityComponents = _a2.loadFunctionalityComponents, renderComponent = _a2.renderComponent;
  function MotionComponent(props, externalRef) {
    var ref = useExternalRef(externalRef);
    var parentContext = (0, import_react29.useContext)(MotionContext);
    var isStatic = parentContext.static || props.static || false;
    var values2 = useMotionValues(props);
    var style = useMotionStyles(values2, props.style, isStatic, props.transformValues);
    var shouldInheritVariant = checkShouldInheritVariant(props);
    var controlsConfig = useConstant(function() {
      return getValueControlsConfig(ref, values2);
    });
    var controls = useValueAnimationControls(controlsConfig, props, shouldInheritVariant);
    var context = useMotionContext(parentContext, controls, values2, isStatic, props);
    var functionality = isStatic ? null : loadFunctionalityComponents(ref, values2, props, parentContext, controls, shouldInheritVariant);
    var renderedComponent = renderComponent(ref, style, values2, props, isStatic);
    return (0, import_react29.createElement)(import_react29.Fragment, null, (0, import_react29.createElement)(MotionContext.Provider, { value: context }, renderedComponent), (0, import_react29.createElement)(import_react29.Fragment, null, (0, import_react29.createElement)(Mount, { innerRef: ref, values: values2, isStatic }), functionality));
  }
  return (0, import_react29.forwardRef)(MotionComponent);
};
var htmlElements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "webview"
];
var svgElements = [
  "animate",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tspan",
  "use",
  "view"
];
var MotionPluginContext = (0, import_react29.createContext)({
  transformPagePoint: function(p) {
    return p;
  }
});
function useUnmountEffect(callback) {
  return (0, import_react29.useEffect)(function() {
    return function() {
      return callback();
    };
  }, []);
}
function addDomEvent(target, eventName, handler, options) {
  if (!handler)
    return;
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler, options);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react29.useEffect)(function() {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  if (!eventHandler)
    return void 0;
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e) {
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var _a2 = primaryTouch || defaultPagePoint, pageX = _a2.pageX, pageY = _a2.pageY;
  return { x: pageX, y: pageY };
}
function pointFromMouse(_a2) {
  var _b2 = _a2.pageX, pageX = _b2 === void 0 ? 0 : _b2, _c = _a2.pageY, pageY = _c === void 0 ? 0 : _c;
  return { x: pageX, y: pageY };
}
function extractEventInfo(event) {
  return {
    point: isTouchEvent(event) ? pointFromTouch(event) : pointFromMouse(event)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  if (!handler)
    return;
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var isBrowser2 = typeof window !== "undefined";
var supportsPointerEvents = function() {
  return isBrowser2 && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser2 && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser2 && window.onmousedown === null;
};
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
var Point;
(function(Point2) {
  Point2.subtract = function(a2, b2) {
    return { x: a2.x - b2.x, y: a2.y - b2.y };
  };
  Point2.relativeTo = function(idOrElem) {
    var elem;
    var getElem = function() {
      if (elem !== void 0)
        return elem;
      if (typeof idOrElem === "string") {
        elem = document.getElementById(idOrElem);
      } else {
        elem = idOrElem;
      }
      return elem;
    };
    return function(_a2) {
      var x = _a2.x, y = _a2.y;
      var localElem = getElem();
      if (!localElem)
        return void 0;
      var rect = localElem.getBoundingClientRect();
      return {
        x: x - rect.left - window.scrollX,
        y: y - rect.top - window.scrollY
      };
    };
  };
})(Point || (Point = {}));
var isViewportScrollBlocked = false;
var isBrowser$1 = typeof window !== "undefined";
if (isBrowser$1) {
  document.addEventListener("touchmove", function(event) {
    if (isViewportScrollBlocked) {
      event.preventDefault();
    }
  }, { passive: false });
}
var blockViewportScroll = function() {
  return isViewportScrollBlocked = true;
};
var unblockViewportScroll = function() {
  return isViewportScrollBlocked = false;
};
var PanSession = function() {
  function PanSession2(event, handlers, _a2) {
    var _this = this;
    var transformPagePoint = (_a2 === void 0 ? {} : _a2).transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point3 = info2.point;
      var timestamp2 = getFrameData().timestamp;
      _this.history.push(__assign(__assign({}, point3), { timestamp: timestamp2 }));
      var _a3 = _this.handlers, onStart = _a3.onStart, onMove = _a3.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point2 = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign(__assign({}, point2), { timestamp })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    var removeOnPointerMove = addPointerEvent(window, "pointermove", function(event2, info2) {
      return _this.handlePointerMove(event2, info2);
    });
    var removeOnPointerUp = addPointerEvent(window, "pointerup", function(event2, info2) {
      return _this.handlePointerUp(event2, info2);
    });
    this.removeListeners = function() {
      removeOnPointerMove && removeOnPointerMove();
      removeOnPointerUp && removeOnPointerUp();
    };
  }
  PanSession2.prototype.handlePointerMove = function(event, info) {
    this.lastMoveEvent = event;
    this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
    if (isMouseEvent(event) && event.buttons === 0) {
      this.handlePointerUp(event, info);
      return;
    }
    framesync_es_default.update(this.updatePoint, true);
  };
  PanSession2.prototype.handlePointerUp = function(event, info) {
    this.end();
    var onEnd = this.handlers.onEnd;
    if (!onEnd)
      return;
    var panInfo = getPanInfo(transformPoint(info, this.transformPagePoint), this.history);
    onEnd && onEnd(event, panInfo);
  };
  PanSession2.prototype.updateHandlers = function(handlers) {
    this.handlers = handlers;
  };
  PanSession2.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
    unblockViewportScroll();
  };
  return PanSession2;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function getPanInfo(_a2, history) {
  var point2 = _a2.point;
  return {
    point: point2,
    delta: Point.subtract(point2, lastDevicePoint(history)),
    offset: Point.subtract(point2, startDevicePoint(history)),
    velocity: getVelocity$1(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function usePanGesture(_a2, ref) {
  var onPan = _a2.onPan, onPanStart = _a2.onPanStart, onPanEnd = _a2.onPanEnd, onPanSessionStart = _a2.onPanSessionStart;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = (0, import_react29.useRef)(null);
  var transformPagePoint = (0, import_react29.useContext)(MotionPluginContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  (0, import_react29.useEffect)(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function() {
    return panSession.current && panSession.current.end();
  });
}
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
var order2 = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function(gesture) {
  return order2.indexOf(gesture) + 1;
};
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
  var lock = false;
  if (drag === "y") {
    lock = globalVerticalLock();
  } else if (drag === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
var tapGesturePriority = getGesturePriority("whileTap");
function useTapGesture(_a2, ref) {
  var onTap = _a2.onTap, onTapStart = _a2.onTapStart, onTapCancel = _a2.onTapCancel, whileTap = _a2.whileTap, controls = _a2.controls;
  var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isTapping = (0, import_react29.useRef)(false);
  var cancelPointerEventListener = (0, import_react29.useRef)(null);
  function removePointerUp() {
    cancelPointerEventListener.current && cancelPointerEventListener.current();
    cancelPointerEventListener.current = null;
  }
  if (whileTap && controls) {
    controls.setOverride(whileTap, tapGesturePriority);
  }
  var onPointerUp = (0, import_react29.useRef)(null);
  onPointerUp.current = function(event, info) {
    var element = ref.current;
    removePointerUp();
    if (!isTapping.current || !element)
      return;
    isTapping.current = false;
    if (controls && whileTap) {
      controls.clearOverride(tapGesturePriority);
    }
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
      return;
    openGestureLock();
    if (!isNodeOrChild(element, event.target)) {
      onTapCancel && onTapCancel(event, info);
    } else {
      onTap && onTap(event, info);
    }
  };
  function onPointerDown(event, info) {
    removePointerUp();
    cancelPointerEventListener.current = addPointerEvent(window, "pointerup", function(event2, info2) {
      return onPointerUp.current(event2, info2);
    });
    var element = ref.current;
    if (!element || isTapping.current)
      return;
    isTapping.current = true;
    onTapStart && onTapStart(event, info);
    if (controls && whileTap) {
      controls.startOverride(tapGesturePriority);
    }
  }
  usePointerEvent(ref, "pointerdown", hasTapListeners ? onPointerDown : void 0);
  useUnmountEffect(removePointerUp);
}
var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function(listener) {
  return function(event, info) {
    if (isMouseEvent(event))
      listener(event, info);
  };
};
function useHoverGesture(_a2, ref) {
  var whileHover = _a2.whileHover, onHoverStart = _a2.onHoverStart, onHoverEnd = _a2.onHoverEnd, controls = _a2.controls;
  if (whileHover && controls) {
    controls.setOverride(whileHover, hoverPriority);
  }
  usePointerEvent(ref, "pointerenter", filterTouch(function(event, info) {
    if (onHoverStart)
      onHoverStart(event, info);
    if (whileHover && controls) {
      controls.startOverride(hoverPriority);
    }
  }));
  usePointerEvent(ref, "pointerleave", filterTouch(function(event, info) {
    if (onHoverEnd)
      onHoverEnd(event, info);
    if (whileHover && controls) {
      controls.clearOverride(hoverPriority);
    }
  }));
}
function useGestures(props, ref) {
  usePanGesture(props, ref);
  useTapGesture(props, ref);
  useHoverGesture(props, ref);
}
var makeRenderlessComponent = function(hook) {
  return function(props) {
    hook(props);
    return null;
  };
};
var gestureProps = [
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "whileTap",
  "whileHover",
  "onHoverStart",
  "onHoverEnd"
];
var Gestures = {
  key: "gestures",
  shouldRender: function(props) {
    return gestureProps.some(function(key) {
      return props.hasOwnProperty(key);
    });
  },
  Component: makeRenderlessComponent(function(_a2) {
    var innerRef = _a2.innerRef, props = __rest(_a2, ["innerRef"]);
    useGestures(props, innerRef);
  })
};
var isRefObject = function(ref) {
  return typeof ref === "object" && ref.hasOwnProperty("current");
};
var noop = function(v) {
  return v;
};
var ComponentDragControls = function() {
  function ComponentDragControls2(_a2) {
    var ref = _a2.ref, values2 = _a2.values, controls = _a2.controls;
    this.isDragging = false;
    this.currentDirection = null;
    this.constraints = false;
    this.props = {
      transformPagePoint: noop
    };
    this.point = {};
    this.origin = {
      x: motionValue(0),
      y: motionValue(0)
    };
    this.openGlobalLock = null;
    this.panSession = null;
    this.prevConstraintsBox = {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    this.ref = ref;
    this.values = values2;
    this.controls = controls;
  }
  ComponentDragControls2.prototype.start = function(originEvent, _a2) {
    var _this = this;
    var _b2 = (_a2 === void 0 ? {} : _a2).snapToCursor, snapToCursor = _b2 === void 0 ? false : _b2;
    snapToCursor && this.snapToCursor(originEvent);
    var onSessionStart = function() {
      blockViewportScroll();
      bothAxis(function(axis) {
        var axisPoint = _this.point[axis];
        axisPoint && axisPoint.stop();
      });
    };
    var onStart = function(event, info) {
      if (_this.constraintsNeedResolution) {
        var _a3 = _this.props, dragConstraints = _a3.dragConstraints, transformPagePoint_1 = _a3.transformPagePoint;
        _this.constraints = calculateConstraintsFromDom(dragConstraints, _this.ref, _this.point, transformPagePoint_1);
        _this.applyConstraintsToPoint();
      }
      bothAxis(function(axis) {
        var axisPoint = _this.point[axis];
        if (!axisPoint)
          return;
        _this.origin[axis].set(axisPoint.get());
      });
      var _b3 = _this.props, drag = _b3.drag, dragPropagation = _b3.dragPropagation;
      if (drag && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      var onDragStart = _this.props.onDragStart;
      onDragStart && onDragStart(event, convertPanToDrag(info, _this.point));
    };
    var onMove = function(event, info) {
      var _a3 = _this.props, dragPropagation = _a3.dragPropagation, dragDirectionLock = _a3.dragDirectionLock;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset2 = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset2);
        if (_this.currentDirection !== null) {
          var onDirectionLock = _this.props.onDirectionLock;
          onDirectionLock && onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updatePoint("x", offset2);
      _this.updatePoint("y", offset2);
      var onDrag = _this.props.onDrag;
      onDrag && onDrag(event, convertPanToDrag(info, _this.point));
    };
    var onEnd = function(event, info) {
      _this.stop(event, info);
    };
    var transformPagePoint = this.props.transformPagePoint;
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onEnd
    }, { transformPagePoint });
  };
  ComponentDragControls2.prototype.cancelDrag = function() {
    unblockViewportScroll();
    this.isDragging = false;
    this.panSession && this.panSession.end();
    this.panSession = null;
    if (!this.props.dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
  };
  ComponentDragControls2.prototype.stop = function(event, info) {
    var _a2;
    (_a2 = this.panSession) === null || _a2 === void 0 ? void 0 : _a2.end();
    this.panSession = null;
    var isDragging = this.isDragging;
    this.cancelDrag();
    if (!isDragging)
      return;
    var _b2 = this.props, dragMomentum = _b2.dragMomentum, dragElastic = _b2.dragElastic, onDragEnd = _b2.onDragEnd;
    if (dragMomentum || dragElastic) {
      var velocity = info.velocity;
      this.animateDragEnd(velocity);
    } else {
      this.recordBoxInfo(this.constraints);
    }
    onDragEnd && onDragEnd(event, convertPanToDrag(info, this.point));
  };
  ComponentDragControls2.prototype.recordBoxInfo = function(constraints) {
    if (constraints) {
      var right = constraints.right, left = constraints.left, bottom = constraints.bottom, top_1 = constraints.top;
      this.prevConstraintsBox.width = (right || 0) - (left || 0);
      this.prevConstraintsBox.height = (bottom || 0) - (top_1 || 0);
    }
    if (this.point.x)
      this.prevConstraintsBox.x = this.point.x.get();
    if (this.point.y)
      this.prevConstraintsBox.y = this.point.y.get();
  };
  ComponentDragControls2.prototype.snapToCursor = function(event) {
    var _this = this;
    var transformPagePoint = this.props.transformPagePoint;
    var point2 = extractEventInfo(event).point;
    var boundingBox2 = getBoundingBox(this.ref, transformPagePoint);
    var center = {
      x: boundingBox2.width / 2 + boundingBox2.left + window.scrollX,
      y: boundingBox2.height / 2 + boundingBox2.top + window.scrollY
    };
    var offset2 = {
      x: point2.x - center.x,
      y: point2.y - center.y
    };
    bothAxis(function(axis) {
      var point3 = _this.point[axis];
      if (!point3)
        return;
      _this.origin[axis].set(point3.get());
    });
    this.updatePoint("x", offset2);
    this.updatePoint("y", offset2);
  };
  ComponentDragControls2.prototype.setPoint = function(axis, value) {
    this.point[axis] = value;
  };
  ComponentDragControls2.prototype.updatePoint = function(axis, offset2) {
    var _a2 = this.props, drag = _a2.drag, dragElastic = _a2.dragElastic;
    var axisPoint = this.point[axis];
    if (!shouldDrag(axis, drag, this.currentDirection) || !axisPoint)
      return;
    var current = applyConstraints(axis, this.origin[axis].get() + offset2[axis], this.constraints, dragElastic);
    axisPoint.set(current);
  };
  ComponentDragControls2.prototype.updateProps = function(_a2) {
    var _this = this;
    var _b2 = _a2.drag, drag = _b2 === void 0 ? false : _b2, _c = _a2.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a2.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a2.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a2.dragElastic, dragElastic = _f === void 0 ? true : _f, _g = _a2.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a2, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
    this.props = __assign({
      drag,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    }, remainingProps);
    var _dragValueX = remainingProps._dragValueX, _dragValueY = remainingProps._dragValueY, dragOriginX = remainingProps.dragOriginX, dragOriginY = remainingProps.dragOriginY;
    if (dragOriginX)
      this.origin.x = dragOriginX;
    if (dragOriginY)
      this.origin.y = dragOriginY;
    bothAxis(function(axis) {
      if (!shouldDrag(axis, drag, _this.currentDirection))
        return;
      var defaultValue = axis === "x" ? _dragValueX : _dragValueY;
      _this.setPoint(axis, defaultValue || _this.values.get(axis, 0));
    });
    this.constraintsNeedResolution = isRefObject(dragConstraints);
    this.constraints = this.constraintsNeedResolution ? this.constraints || false : dragConstraints;
  };
  ComponentDragControls2.prototype.applyConstraintsToPoint = function(constraints) {
    var _this = this;
    if (constraints === void 0) {
      constraints = this.constraints;
    }
    return bothAxis(function(axis) {
      var axisPoint = _this.point[axis];
      axisPoint && !axisPoint.isAnimating() && applyConstraints(axis, axisPoint, constraints, 0);
    });
  };
  ComponentDragControls2.prototype.animateDragEnd = function(velocity) {
    var _this = this;
    var _a2 = this.props, drag = _a2.drag, dragMomentum = _a2.dragMomentum, dragElastic = _a2.dragElastic, dragTransition = _a2.dragTransition, _dragValueX = _a2._dragValueX, _dragValueY = _a2._dragValueY, _dragTransitionControls = _a2._dragTransitionControls;
    var momentumAnimations = bothAxis(function(axis) {
      var _a3;
      if (!shouldDrag(axis, drag, _this.currentDirection)) {
        return;
      }
      var transition = _this.constraints ? getConstraints(axis, _this.constraints) : {};
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var animationControls = _dragTransitionControls || _this.controls;
      var inertia2 = __assign(__assign({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1
      }, dragTransition), transition);
      var externalAxisMotionValue = axis === "x" ? _dragValueX : _dragValueY;
      return externalAxisMotionValue ? startAnimation(axis, externalAxisMotionValue, 0, inertia2) : animationControls.start((_a3 = {}, _a3[axis] = 0, _a3.transition = inertia2, _a3));
    });
    return Promise.all(momentumAnimations).then(function() {
      _this.recordBoxInfo(_this.constraints);
      _this.scalePoint();
      var onDragTransitionEnd = _this.props.onDragTransitionEnd;
      onDragTransitionEnd && onDragTransitionEnd();
    });
  };
  ComponentDragControls2.prototype.scalePoint = function() {
    var _this = this;
    var _a2 = this.props, dragConstraints = _a2.dragConstraints, transformPagePoint = _a2.transformPagePoint;
    if (!isRefObject(dragConstraints))
      return;
    var constraintsBox = getBoundingBox(dragConstraints, transformPagePoint);
    var draggableBox = getBoundingBox(this.ref, transformPagePoint);
    var scaleAxisPoint = function(axis, dimension) {
      var pointToScale = _this.point[axis];
      if (!pointToScale)
        return;
      if (pointToScale.isAnimating()) {
        pointToScale.stop();
        _this.recordBoxInfo();
        return;
      }
      var scale2 = _this.prevConstraintsBox[dimension] ? (constraintsBox[dimension] - draggableBox[dimension]) / _this.prevConstraintsBox[dimension] : 1;
      pointToScale.set(_this.prevConstraintsBox[axis] * scale2);
    };
    scaleAxisPoint("x", "width");
    scaleAxisPoint("y", "height");
  };
  ComponentDragControls2.prototype.mount = function(element) {
    var _this = this;
    var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
      var _a3 = _this.props, drag = _a3.drag, _b2 = _a3.dragListener, dragListener = _b2 === void 0 ? true : _b2;
      drag && dragListener && _this.start(event);
    });
    var stopResizeListener = addDomEvent(window, "resize", function() {
      return _this.scalePoint();
    });
    if (this.constraintsNeedResolution) {
      var _a2 = this.props, dragConstraints = _a2.dragConstraints, transformPagePoint = _a2.transformPagePoint;
      var constraints = calculateConstraintsFromDom(dragConstraints, this.ref, this.point, transformPagePoint);
      this.applyConstraintsToPoint(constraints);
      this.recordBoxInfo(constraints);
    } else if (!this.isDragging && this.constraints) {
      this.applyConstraintsToPoint();
    }
    return function() {
      stopPointerListener && stopPointerListener();
      stopResizeListener && stopResizeListener();
      _this.cancelDrag();
    };
  };
  return ComponentDragControls2;
}();
function bothAxis(handler) {
  return [handler("x"), handler("y")];
}
function convertPanToDrag(info, point2) {
  return __assign(__assign({}, info), { point: {
    x: point2.x ? point2.x.get() : 0,
    y: point2.y ? point2.y.get() : 0
  } });
}
function getConstraints(axis, _a2) {
  var top = _a2.top, right = _a2.right, bottom = _a2.bottom, left = _a2.left;
  if (axis === "x") {
    return { min: left, max: right };
  } else {
    return { min: top, max: bottom };
  }
}
function shouldDrag(direction, drag, currentDirection) {
  return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset2, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset2.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset2.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
function calculateConstraintsFromDom(constraintsRef, draggableRef, point2, transformPagePoint) {
  invariant(constraintsRef.current !== null && draggableRef.current !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
  var parentBoundingBox = getBoundingBox(constraintsRef, transformPagePoint);
  var draggableBoundingBox = getBoundingBox(draggableRef, transformPagePoint);
  var left = parentBoundingBox.left - draggableBoundingBox.left + getCurrentOffset(point2.x);
  var top = parentBoundingBox.top - draggableBoundingBox.top + getCurrentOffset(point2.y);
  var right = parentBoundingBox.width - draggableBoundingBox.width + left;
  var bottom = parentBoundingBox.height - draggableBoundingBox.height + top;
  return { top, left, right, bottom };
}
function getBoundingBox(ref, transformPagePoint) {
  var rect = ref.current.getBoundingClientRect();
  var _a2 = transformPagePoint({
    x: rect.left,
    y: rect.top
  }), left = _a2.x, top = _a2.y;
  var _b2 = transformPagePoint({
    x: rect.width,
    y: rect.height
  }), width = _b2.x, height = _b2.y;
  return { left, top, width, height };
}
function getCurrentOffset(point2) {
  return point2 ? point2.get() : 0;
}
function applyConstraints(axis, value, constraints, dragElastic) {
  var constrainedValue = value instanceof MotionValue ? value.get() : value;
  if (!constraints) {
    return constrainedValue;
  }
  var _a2 = getConstraints(axis, constraints), min5 = _a2.min, max5 = _a2.max;
  if (min5 !== void 0 && constrainedValue < min5) {
    constrainedValue = dragElastic ? applyOverdrag(min5, constrainedValue, dragElastic) : Math.max(min5, constrainedValue);
  } else if (max5 !== void 0 && constrainedValue > max5) {
    constrainedValue = dragElastic ? applyOverdrag(max5, constrainedValue, dragElastic) : Math.min(max5, constrainedValue);
  }
  if (value instanceof MotionValue) {
    value.set(constrainedValue);
  }
  return constrainedValue;
}
function applyOverdrag(origin, current, dragElastic) {
  var dragFactor = typeof dragElastic === "number" ? dragElastic : 0.35;
  return mix(origin, current, dragFactor);
}
function useDrag(props, ref, values2, controls) {
  var groupDragControls = props.dragControls;
  var transformPagePoint = (0, import_react29.useContext)(MotionPluginContext).transformPagePoint;
  var dragControls = useConstant(function() {
    return new ComponentDragControls({ ref, values: values2, controls });
  });
  dragControls.updateProps(__assign(__assign({}, props), { transformPagePoint }));
  (0, import_react29.useEffect)(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls]);
  (0, import_react29.useEffect)(function() {
    return dragControls.mount(ref.current);
  }, []);
}
var Drag = {
  key: "drag",
  shouldRender: function(props) {
    return !!props.drag;
  },
  Component: makeRenderlessComponent(function(_a2) {
    var innerRef = _a2.innerRef, values2 = _a2.values, controls = _a2.controls, props = __rest(_a2, ["innerRef", "values", "controls"]);
    return useDrag(props, innerRef, values2, controls);
  })
};
function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match2 = cssVariableRegex.exec(current);
  if (!match2)
    return [,];
  var token = match2[1], fallback = match2[2];
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }
  invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "' + current + '". This may indicate a circular fallback dependency.');
  var _a2 = parseCSSVariable(current), token = _a2[0], fallback = _a2[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved;
  } else if (isCSSVariable(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(values2, ref, _a2, transitionEnd) {
  var target = __rest(_a2, []);
  var element = ref.current;
  if (!(element instanceof HTMLElement))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  }
  values2.forEach(function(value) {
    var current2 = value.get();
    if (!isCSSVariable(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd && transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v) {
  return v === number2 || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a2) {
    var transform2 = _a2.transform;
    if (transform2 === "none" || !transform2)
      return 0;
    var matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform2.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys2 = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys2.has(key);
});
function removeNonTranslationalTransform(values2, elementStyler) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = values2.get(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    elementStyler.render();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a2) {
    var width = _a2.width;
    return width;
  },
  height: function(_a2) {
    var height = _a2.height;
    return height;
  },
  top: function(_bbox, _a2) {
    var top = _a2.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a2) {
    var left = _a2.left;
    return parseFloat(left);
  },
  bottom: function(_a2, _b2) {
    var height = _a2.height;
    var top = _b2.top;
    return parseFloat(top) + height;
  },
  right: function(_a2, _b2) {
    var width = _a2.width;
    var left = _b2.left;
    return parseFloat(left) + width;
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, values2, element, elementStyler, changedKeys) {
  var originBbox = element.getBoundingClientRect();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform2 = elementComputedStyle.transform;
  var originComputedStyle = { top, left, bottom, right, transform: transform2 };
  if (display === "none") {
    elementStyler.set("display", target.display || "block");
  }
  elementStyler.render();
  var targetBbox = element.getBoundingClientRect();
  changedKeys.forEach(function(key) {
    var value = values2.get(key);
    setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(values2, ref, target, transitionEnd) {
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var element = ref.current;
  var elementStyler = stylefire_es_default(element);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = targetPositionalKeys.reduce(function(acc, key) {
    var value = values2.get(key);
    if (!value)
      return acc;
    var from2 = value.get();
    var to = target[key];
    var fromType = getDimensionValueType(from2);
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
        if (!toType) {
          toType = getDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(getDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = getDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(values2, elementStyler);
          hasAttemptedToRemoveTransformValues = true;
        }
        acc.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
    return acc;
  }, []);
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, values2, element, elementStyler, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a2) {
        var key = _a2[0], value = _a2[1];
        values2.get(key).set(value);
      });
    }
    elementStyler.render();
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(values2, ref, target, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(values2, ref, target, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = function(values2, ref) {
  return function(target, transitionEnd) {
    var resolved = resolveCSSVariables(values2, ref, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(values2, ref, target, transitionEnd);
  };
};
var SyncLayoutContext = (0, import_react29.createContext)(null);
var _a;
var StepName;
(function(StepName2) {
  StepName2["Prepare"] = "prepare";
  StepName2["Read"] = "read";
  StepName2["Render"] = "render";
})(StepName || (StepName = {}));
var stepOrder = [StepName.Prepare, StepName.Read, StepName.Render];
var jobs = stepOrder.reduce(function(acc, key) {
  acc[key] = [];
  return acc;
}, {});
var jobsNeedProcessing = false;
function flushCallbackList(list) {
  var numJobs = list.length;
  for (var i = 0; i < numJobs; i++) {
    list[i]();
  }
  list.length = 0;
}
function flushAllJobs() {
  if (!jobsNeedProcessing)
    return;
  flushCallbackList(jobs.prepare);
  flushCallbackList(jobs.read);
  flushCallbackList(jobs.render);
  jobsNeedProcessing = false;
}
var createUseSyncEffect = function(stepName) {
  return function(callback) {
    if (!callback)
      return;
    jobsNeedProcessing = true;
    jobs[stepName].push(callback);
  };
};
var layoutSync = (_a = {}, _a[StepName.Prepare] = createUseSyncEffect(StepName.Prepare), _a[StepName.Read] = createUseSyncEffect(StepName.Read), _a[StepName.Render] = createUseSyncEffect(StepName.Render), _a.flush = flushAllJobs, _a);
function isHTMLElement2(element) {
  return element instanceof HTMLElement;
}
var defaultLayoutTransition = {
  duration: 0.8,
  ease: [0.45, 0.05, 0.19, 1]
};
var defaultPositionTransition = underDampedSpring();
function getDefaultLayoutTransition(isPositionOnly) {
  return isPositionOnly ? defaultPositionTransition : defaultLayoutTransition;
}
function isResolver(transition) {
  return typeof transition === "function";
}
var axisLabels = {
  x: {
    id: "x",
    size: "width",
    min: "left",
    max: "right",
    origin: "originX"
  },
  y: {
    id: "y",
    size: "height",
    min: "top",
    max: "bottom",
    origin: "originY"
  }
};
function centerOf(min5, max5) {
  return (min5 + max5) / 2;
}
function calcAxisDelta(prev, next, names) {
  var _a2;
  var sizeDelta = prev[names.size] - next[names.size];
  var origin = 0.5;
  if (sizeDelta) {
    if (prev[names.min] === next[names.min]) {
      origin = 0;
    } else if (prev[names.max] === next[names.max]) {
      origin = 1;
    }
  }
  var delta = (_a2 = {}, _a2[names.size] = sizeDelta, _a2[names.origin] = origin, _a2[names.id] = origin === 0.5 ? centerOf(prev[names.min], prev[names.max]) - centerOf(next[names.min], next[names.max]) : 0, _a2);
  return delta;
}
function calcDelta(prev, next) {
  var delta = __assign(__assign({}, calcAxisDelta(prev, next, axisLabels.x)), calcAxisDelta(prev, next, axisLabels.y));
  return delta;
}
var offset = {
  getLayout: function(_a2) {
    var offset2 = _a2.offset;
    return offset2;
  },
  measure: function(element) {
    var offsetLeft = element.offsetLeft, offsetTop = element.offsetTop, offsetWidth = element.offsetWidth, offsetHeight = element.offsetHeight;
    return {
      left: offsetLeft,
      top: offsetTop,
      right: offsetLeft + offsetWidth,
      bottom: offsetTop + offsetHeight,
      width: offsetWidth,
      height: offsetHeight
    };
  }
};
var boundingBox = {
  getLayout: function(_a2) {
    var boundingBox2 = _a2.boundingBox;
    return boundingBox2;
  },
  measure: function(element) {
    var _a2 = element.getBoundingClientRect(), left = _a2.left, top = _a2.top, width = _a2.width, height = _a2.height, right = _a2.right, bottom = _a2.bottom;
    return { left, top, width, height, right, bottom };
  }
};
function readPositionStyle(element) {
  return window.getComputedStyle(element).position;
}
function getLayoutType(prev, next, isPositionOnly) {
  return isPositionOnly && prev === next ? offset : boundingBox;
}
function isSizeKey(key) {
  return key === "width" || key === "height";
}
function getTransition(_a2) {
  var layoutTransition = _a2.layoutTransition, positionTransition = _a2.positionTransition;
  return layoutTransition || positionTransition;
}
var LayoutAnimation = function(_super) {
  __extends(LayoutAnimation2, _super);
  function LayoutAnimation2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  LayoutAnimation2.prototype.getSnapshotBeforeUpdate = function() {
    var _a2 = this.props, innerRef = _a2.innerRef, positionTransition = _a2.positionTransition, values2 = _a2.values, controls = _a2.controls;
    var element = innerRef.current;
    if (!isHTMLElement2(element))
      return;
    var layoutTransition = getTransition(this.props);
    var isPositionOnly = !!positionTransition;
    var positionStyle = readPositionStyle(element);
    var prev = {
      offset: offset.measure(element),
      boundingBox: boundingBox.measure(element)
    };
    var transform2;
    var next;
    var compare;
    layoutSync.prepare(function() {
      transform2 = element.style.transform;
      element.style.transform = "";
    });
    layoutSync.read(function() {
      next = {
        offset: offset.measure(element),
        boundingBox: boundingBox.measure(element)
      };
      var nextPosition = readPositionStyle(element);
      compare = getLayoutType(positionStyle, nextPosition, isPositionOnly);
    });
    layoutSync.render(function() {
      var prevLayout = compare.getLayout(prev);
      var nextLayout = compare.getLayout(next);
      var delta = calcDelta(prevLayout, nextLayout);
      var hasAnyChanged = delta.x || delta.y || delta.width || delta.height;
      if (!hasAnyChanged) {
        transform2 && (element.style.transform = transform2);
        return;
      }
      stylefire_es_default(element).set({
        originX: delta.originX,
        originY: delta.originY
      });
      syncRenderSession.open();
      var target = {};
      var transition = {};
      var transitionDefinition = isResolver(layoutTransition) ? layoutTransition({ delta }) : layoutTransition;
      function makeTransition(layoutKey, transformKey, targetValue, visualOrigin) {
        var deltaKey = isSizeKey(layoutKey) ? layoutKey : transformKey;
        if (!delta[deltaKey])
          return;
        var baseTransition = typeof transitionDefinition === "boolean" ? __assign({}, getDefaultLayoutTransition(isPositionOnly)) : transitionDefinition;
        var value = values2.get(transformKey, targetValue);
        var velocity = value.getVelocity();
        transition[transformKey] = baseTransition[transformKey] ? __assign({}, baseTransition[transformKey]) : __assign({}, baseTransition);
        if (transition[transformKey].velocity === void 0) {
          transition[transformKey].velocity = velocity || 0;
        }
        target[transformKey] = targetValue;
        var offsetToApply = !isSizeKey(layoutKey) && compare === offset ? value.get() : 0;
        value.set(visualOrigin + offsetToApply);
      }
      makeTransition("left", "x", 0, delta.x);
      makeTransition("top", "y", 0, delta.y);
      if (!isPositionOnly) {
        makeTransition("width", "scaleX", 1, prev.boundingBox.width / next.boundingBox.width);
        makeTransition("height", "scaleY", 1, prev.boundingBox.height / next.boundingBox.height);
      }
      target.transition = transition;
      transitionDefinition && controls.start(target);
      syncRenderSession.flush();
    });
    return null;
  };
  LayoutAnimation2.prototype.componentDidUpdate = function() {
    layoutSync.flush();
  };
  LayoutAnimation2.prototype.render = function() {
    return null;
  };
  LayoutAnimation2.contextType = SyncLayoutContext;
  return LayoutAnimation2;
}(import_react29.Component);
var Layout = {
  key: "layout",
  shouldRender: function(_a2) {
    var positionTransition = _a2.positionTransition, layoutTransition = _a2.layoutTransition;
    invariant(!(positionTransition && layoutTransition), "Don't set both positionTransition and layoutTransition on the same component");
    return typeof window !== "undefined" && !!(positionTransition || layoutTransition);
  },
  Component: LayoutAnimation
};
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "static",
  "positionTransition",
  "layoutTransition",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "_dragValueX",
  "_dragValueY",
  "_dragTransitionControls",
  "dragOriginX",
  "dragOriginY",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "whileHover",
  "whileTap",
  "onHoverEnd",
  "onHoverStart"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}
var AnimatePropType;
(function(AnimatePropType2) {
  AnimatePropType2["Target"] = "Target";
  AnimatePropType2["VariantLabel"] = "VariantLabel";
  AnimatePropType2["AnimationSubscription"] = "AnimationSubscription";
})(AnimatePropType || (AnimatePropType = {}));
function shallowCompare(next, prev) {
  if (prev === null)
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
var hasUpdated = function(prev, next) {
  return next !== void 0 && (Array.isArray(prev) && Array.isArray(next) ? !shallowCompare(next, prev) : prev !== next);
};
function targetWithoutTransition(_a2, mergeTransitionEnd) {
  if (mergeTransitionEnd === void 0) {
    mergeTransitionEnd = false;
  }
  var transition = _a2.transition, transitionEnd = _a2.transitionEnd, target = __rest(_a2, ["transition", "transitionEnd"]);
  return mergeTransitionEnd ? __assign(__assign({}, target), transitionEnd) : target;
}
function useAnimateProp(targetAndTransition, controls, values2, defaultTransition) {
  var isInitialRender = (0, import_react29.useRef)(true);
  var prevValues = (0, import_react29.useRef)(null);
  if (!prevValues.current) {
    prevValues.current = targetWithoutTransition(targetAndTransition, true);
  }
  (0, import_react29.useEffect)(function() {
    var targetToAnimate = {};
    var animatingTarget = targetWithoutTransition(targetAndTransition);
    var finalTarget = targetWithoutTransition(targetAndTransition, true);
    for (var key in animatingTarget) {
      var shouldAnimateOnMount = isInitialRender.current && (!values2.has(key) || values2.get(key).get() !== finalTarget[key]);
      var isValidValue = finalTarget[key] !== null;
      var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
      if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
        targetToAnimate[key] = animatingTarget[key];
      }
    }
    isInitialRender.current = false;
    prevValues.current = __assign(__assign({}, prevValues.current), finalTarget);
    if (Object.keys(targetToAnimate).length) {
      controls.start(__assign(__assign({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
    }
  }, [targetAndTransition]);
}
var labelsToArray = function(label2) {
  if (!label2) {
    return [];
  }
  if (Array.isArray(label2)) {
    return label2;
  }
  return [label2];
};
var resolveVariantLabels = function(variant) {
  var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
  return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
var asDependencyList = function(list) {
  return [
    list.join(",")
  ];
};
var hasVariantChanged = function(oldVariant, newVariant) {
  return oldVariant.join(",") !== newVariant.join(",");
};
function useVariants(initial, animate, inherit, controls) {
  var targetVariants = resolveVariantLabels(animate);
  var context = (0, import_react29.useContext)(MotionContext);
  var parentAlreadyMounted = context.hasMounted && context.hasMounted.current;
  var hasMounted = (0, import_react29.useRef)(false);
  (0, import_react29.useEffect)(function() {
    var shouldAnimate = false;
    if (inherit) {
      shouldAnimate = !!parentAlreadyMounted;
      targetVariants = resolveVariantLabels(context.animate);
    } else {
      shouldAnimate = hasMounted.current || hasVariantChanged(resolveVariantLabels(initial), targetVariants);
    }
    shouldAnimate && controls.start(targetVariants);
    hasMounted.current = true;
  }, asDependencyList(targetVariants));
}
function useAnimationGroupSubscription(animation, controls) {
  var unsubscribe = (0, import_react29.useMemo)(function() {
    return animation.subscribe(controls);
  }, [
    animation
  ]);
  (0, import_react29.useEffect)(function() {
    return function() {
      unsubscribe && unsubscribe();
    };
  }, [unsubscribe]);
}
var _a$1;
var _b;
var AnimatePropComponents = (_a$1 = {}, _a$1[AnimatePropType.Target] = makeRenderlessComponent(function(_a2) {
  var animate = _a2.animate, controls = _a2.controls, values2 = _a2.values, transition = _a2.transition;
  return useAnimateProp(animate, controls, values2, transition);
}), _a$1[AnimatePropType.VariantLabel] = makeRenderlessComponent(function(_a2) {
  var animate = _a2.animate, _b2 = _a2.inherit, inherit = _b2 === void 0 ? true : _b2, controls = _a2.controls, initial = _a2.initial;
  return useVariants(initial, animate, inherit, controls);
}), _a$1[AnimatePropType.AnimationSubscription] = makeRenderlessComponent(function(_a2) {
  var animate = _a2.animate, controls = _a2.controls;
  return useAnimationGroupSubscription(animate, controls);
}), _a$1);
var isVariantLabel$1 = function(prop) {
  return Array.isArray(prop) || typeof prop === "string";
};
var isAnimationSubscription = function(_a2) {
  var animate = _a2.animate;
  return animate instanceof AnimationControls;
};
var animationProps = ["initial", "animate", "whileTap", "whileHover"];
var animatePropTypeTests = (_b = {}, _b[AnimatePropType.Target] = function(props) {
  return props.animate !== void 0 && !isVariantLabel$1(props.animate) && !isAnimationSubscription(props);
}, _b[AnimatePropType.VariantLabel] = function(props) {
  return props.variants !== void 0 || animationProps.some(function(key) {
    return typeof props[key] === "string";
  });
}, _b[AnimatePropType.AnimationSubscription] = isAnimationSubscription, _b);
var getAnimationComponent = function(props) {
  var animatePropType = void 0;
  for (var key in AnimatePropType) {
    if (animatePropTypeTests[key](props)) {
      animatePropType = key;
    }
  }
  return animatePropType ? AnimatePropComponents[animatePropType] : void 0;
};
function usePresence() {
  var context = (0, import_react29.useContext)(PresenceContext);
  if (context === null)
    return [true];
  var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  (0, import_react29.useEffect)(register, []);
  return !isPresent && onExitComplete ? [false, onExitComplete] : [true];
}
var Exit = {
  key: "exit",
  shouldRender: function(props) {
    return !!props.exit && !checkShouldInheritVariant(props);
  },
  Component: makeRenderlessComponent(function(props) {
    var _a2;
    var animate = props.animate, controls = props.controls, exit = props.exit;
    var _b2 = usePresence(), isPresent = _b2[0], onExitComplete = _b2[1];
    var presenceContext = (0, import_react29.useContext)(PresenceContext);
    var isPlayingExitAnimation = (0, import_react29.useRef)(false);
    var custom2 = ((_a2 = presenceContext) === null || _a2 === void 0 ? void 0 : _a2.custom) !== void 0 ? presenceContext.custom : props.custom;
    (0, import_react29.useEffect)(function() {
      if (!isPresent) {
        if (!isPlayingExitAnimation.current && exit) {
          controls.setProps(__assign(__assign({}, props), { custom: custom2 }));
          controls.start(exit).then(onExitComplete);
        }
        isPlayingExitAnimation.current = true;
      } else if (isPlayingExitAnimation.current && animate && !(animate instanceof AnimationControls)) {
        controls.start(animate);
      }
      if (isPresent) {
        isPlayingExitAnimation.current = false;
      }
    }, [isPresent]);
  })
};
var isPropValid = function(key) {
  return !isValidMotionProp(key);
};
try {
  emotionIsPropValid_1 = (init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default;
  isPropValid = function(key) {
    if (key.startsWith("on")) {
      return !isValidMotionProp(key);
    } else {
      return emotionIsPropValid_1(key);
    }
  };
} catch (_a2) {
}
var emotionIsPropValid_1;
function filterValidProps(props) {
  var domProps = {};
  for (var key in props) {
    if (isPropValid(key)) {
      domProps[key] = props[key];
    }
  }
  return domProps;
}
var buildHTMLProps = function(values2, style, isStatic, isDrag) {
  var props = {
    style: buildStyleAttr(values2, style, isStatic)
  };
  if (isDrag) {
    props.style.userSelect = "none";
    props.draggable = false;
  }
  return props;
};
var buildSVGProps = function(values2, style) {
  var motionValueStyles = resolveCurrent(values2);
  var props = buildSVGAttrs(motionValueStyles, void 0, void 0, void 0, void 0, false);
  props.style = __assign(__assign({}, style), props.style);
  return props;
};
var functionalityComponents = [Layout, Drag, Gestures, Exit];
var numFunctionalityComponents = functionalityComponents.length;
function createDomMotionConfig(Component3) {
  var isDOM = typeof Component3 === "string";
  var isSVG = isDOM && svgElements.indexOf(Component3) !== -1;
  return {
    renderComponent: function(ref, style, values2, props, isStatic) {
      var forwardedProps = isDOM ? filterValidProps(props) : props;
      var staticVisualStyles = isSVG ? buildSVGProps(values2, style) : buildHTMLProps(values2, style, isStatic, !!props.drag);
      return (0, import_react29.createElement)(Component3, __assign(__assign(__assign({}, forwardedProps), { ref }), staticVisualStyles));
    },
    loadFunctionalityComponents: function(ref, values2, props, context, controls, inherit) {
      var activeComponents = [];
      var Animation = getAnimationComponent(props);
      if (Animation) {
        activeComponents.push((0, import_react29.createElement)(Animation, { key: "animation", initial: props.initial, animate: props.animate, variants: props.variants, transition: props.transition, controls, inherit, values: values2 }));
      }
      for (var i = 0; i < numFunctionalityComponents; i++) {
        var _a2 = functionalityComponents[i], shouldRender = _a2.shouldRender, key = _a2.key, Component_1 = _a2.Component;
        if (shouldRender(props, context)) {
          activeComponents.push((0, import_react29.createElement)(Component_1, __assign({ key }, props, { parentContext: context, values: values2, controls, innerRef: ref })));
        }
      }
      return activeComponents;
    },
    getValueControlsConfig: function(ref, values2) {
      return {
        values: values2,
        readValueFromSource: function(key) {
          return stylefire_es_default(ref.current).get(key);
        },
        makeTargetAnimatable: parseDomVariant(values2, ref)
      };
    }
  };
}
var htmlMotionComponents = htmlElements.reduce(function(acc, Component3) {
  var config = createDomMotionConfig(Component3);
  acc[Component3] = createMotionComponent(config);
  return acc;
}, {});
var svgMotionComponents = svgElements.reduce(function(acc, Component3) {
  acc[Component3] = createMotionComponent(createDomMotionConfig(Component3));
  return acc;
}, {});
var motion = __assign(__assign({
  custom: function custom(Component3) {
    return createMotionComponent(createDomMotionConfig(Component3));
  }
}, htmlMotionComponents), svgMotionComponents);
function createScrollMotionValues() {
  return {
    scrollX: motionValue(0),
    scrollY: motionValue(0),
    scrollXProgress: motionValue(0),
    scrollYProgress: motionValue(0)
  };
}
var viewportScrollValues = createScrollMotionValues();
var DragControls = function() {
  function DragControls2() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  DragControls2.prototype.subscribe = function(controls) {
    var _this = this;
    this.componentControls.add(controls);
    return function() {
      return _this.componentControls.delete(controls);
    };
  };
  DragControls2.prototype.start = function(event, options) {
    this.componentControls.forEach(function(controls) {
      controls.start(event.nativeEvent || event, options);
    });
  };
  return DragControls2;
}();
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
  if (window.matchMedia) {
    motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    setReducedMotionPreferences = function() {
      return prefersReducedMotion.set(motionMediaQuery_1.matches);
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.set(false);
  }
}
var motionMediaQuery_1;
var setReducedMotionPreferences;

// app/old-app/pages/contact.js
var Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = (0, import_react30.useState)(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
  const encode = (data) => {
    return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  };
  return /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact"
  }, /* @__PURE__ */ import_react30.default.createElement("h3", null, "Have a question? Need Prayer?"), /* @__PURE__ */ import_react30.default.createElement("h1", null, "Contact Us"), isFormSubmitted ? /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-submitted"
  }, /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-submitted-check-container"
  }, /* @__PURE__ */ import_react30.default.createElement(motion.svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: "contact-submitted-check-container-item"
  }, /* @__PURE__ */ import_react30.default.createElement(motion.path, {
    d: "M0 11l2-2 5 5L18 3l2 2L7 18z",
    variants: icon,
    initial: "hidden",
    animate: "visible",
    transition: {
      default: { duration: 2, ease: "easeInOut" },
      fill: { duration: 1, ease: [1, 0, 0.8, 1] }
    }
  }))), /* @__PURE__ */ import_react30.default.createElement("p", null, "Thanks for reaching out! We'll be in touch shortly.")) : /* @__PURE__ */ import_react30.default.createElement(Formik, {
    initialValues: {
      "bot-field": "",
      "form-name": "contact",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      contactOptions: [],
      localToSa: ""
    },
    onSubmit: (values2, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values2 })
      }).then(() => {
        setIsFormSubmitted(true);
        actions.resetForm();
      }).catch(() => {
        console.error();
      }).finally(() => actions.setSubmitting(false));
    },
    validationSchema: ObjectSchema({
      firstName: StringSchema().max(15, "Must be 15 characters or less.").required("First Name Required"),
      lastName: StringSchema().max(20, "Must be 20 characters or less.").required("Last Name Required"),
      phoneNumber: StringSchema().when("contactOptions", {
        is: (val) => val.includes("Phone") === true,
        then: StringSchema().required("Phone Number Required").matches(phoneRegExp, "Please enter a valid phone number"),
        otherwise: StringSchema().matches(phoneRegExp, "Please enter a valid phone number")
      }),
      email: StringSchema().when("contactOptions", {
        is: (val) => val.includes("Email") === true,
        then: StringSchema().email("Invalid email address").required("Email Address Required"),
        otherwise: StringSchema().email("Invalid email address")
      }),
      localToSa: StringSchema().required("Please let us know if you're located in San Antonio."),
      contactOptions: array_default().min(1, "Please Select a Contact Preference"),
      message: StringSchema().min(5, "Please write a little more.").required("Please type your question here.")
    })
  }, (formik) => /* @__PURE__ */ import_react30.default.createElement(Form, {
    className: "contact",
    method: "POST"
  }, /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "hidden",
    name: "bot-field"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "hidden",
    name: "form-name"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    className: "contact-text-field",
    name: "firstName",
    ...formik.getFieldProps("firstName"),
    placeholder: "First Name"
  }), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "firstName"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    className: "contact-text-field",
    name: "lastName",
    ...formik.getFieldProps("lastName"),
    placeholder: "Last Name"
  }), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "lastName"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    className: "contact-text-field",
    name: "phoneNumber",
    ...formik.getFieldProps("phoneNumber"),
    placeholder: "000-000-0000"
  }), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    name: "phoneNumber",
    className: "contact-error-message"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    className: "contact-text-field",
    name: "email",
    ...formik.getFieldProps("email"),
    placeholder: "Email"
  }), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "email"
  }), /* @__PURE__ */ import_react30.default.createElement("h4", null, "Are you located in the San Antonio area?"), /* @__PURE__ */ import_react30.default.createElement("div", {
    role: "group",
    className: "contact-checkbox-group"
  }, /* @__PURE__ */ import_react30.default.createElement("label", null, /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "radio",
    name: "localToSa",
    value: "Yes"
  }), "Yes"), /* @__PURE__ */ import_react30.default.createElement("label", null, /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "radio",
    name: "localToSa",
    value: "No"
  }), "No")), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    name: "localToSa",
    component: "div",
    className: "contact-error-message"
  }), /* @__PURE__ */ import_react30.default.createElement("h4", null, "How should we contact you?"), /* @__PURE__ */ import_react30.default.createElement("div", {
    role: "group",
    className: "contact-checkbox-group"
  }, /* @__PURE__ */ import_react30.default.createElement("label", null, /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "checkbox",
    name: "contactOptions",
    value: "Phone"
  }), "Phone"), /* @__PURE__ */ import_react30.default.createElement("label", null, /* @__PURE__ */ import_react30.default.createElement(Field, {
    type: "checkbox",
    name: "contactOptions",
    value: "Email"
  }), "Email")), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "contactOptions"
  }), /* @__PURE__ */ import_react30.default.createElement(Field, {
    className: "contact-text-area",
    component: "textarea",
    rows: "10",
    cols: "50",
    name: "message",
    ...formik.getFieldProps("message"),
    placeholder: "What can we help you with?"
  }), /* @__PURE__ */ import_react30.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "message"
  }), /* @__PURE__ */ import_react30.default.createElement("button", {
    type: "submit"
  }, "Submit"))), /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-info"
  }, /* @__PURE__ */ import_react30.default.createElement("h2", null, /* @__PURE__ */ import_react30.default.createElement("span", {
    className: "highlight"
  }, "Verse by Verse Fellowship"), " Contact Info"), /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-info-block-group"
  }, /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-info-block"
  }, /* @__PURE__ */ import_react30.default.createElement("h4", null, "Email"), /* @__PURE__ */ import_react30.default.createElement("p", null, /* @__PURE__ */ import_react30.default.createElement("a", {
    href: "mailto:info@vbvf.org"
  }, "info@vbvf.org"))), /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-info-block"
  }, /* @__PURE__ */ import_react30.default.createElement("h4", null, "Mailing Address"), /* @__PURE__ */ import_react30.default.createElement("p", null, "814 Arion Parkway, #410 San Antonio, TX 78216")), /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "contact-info-block"
  }, /* @__PURE__ */ import_react30.default.createElement("h4", null, "Phone Number"), /* @__PURE__ */ import_react30.default.createElement("p", null, "210-460-7556")))));
};
var contact_default = Contact;

// app/old-app/components/scroll-to-top.js
init_react();
var import_react31 = __toESM(require_react());
function ScrollToTop() {
  const { pathname } = useLocation();
  (0, import_react31.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// app/old-app/pages/study-page.js
init_react();
var import_react35 = __toESM(require_react());

// app/old-app/components/lesson-block.js
init_react();
var import_react33 = __toESM(require_react());
function LessonBlock(props) {
  const [modal, setModal] = (0, import_react33.useState)(false);
  const modalToggle = () => setModal(!modal);
  return /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "lesson-block"
  }, /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "lesson-block-title"
  }, /* @__PURE__ */ import_react33.default.createElement("h4", {
    className: "lesson-block-title-lesson"
  }, `Lesson ${props.lessonNumber}`), props.versesCovered && /* @__PURE__ */ import_react33.default.createElement("h5", {
    className: "lesson-block-title-verses"
  }, props.versesCovered)), /* @__PURE__ */ import_react33.default.createElement(Modal_default, {
    isOpen: modal,
    toggle: modalToggle,
    size: "lg"
  }, /* @__PURE__ */ import_react33.default.createElement(ModalHeader_default, {
    toggle: modalToggle
  }), /* @__PURE__ */ import_react33.default.createElement(ModalBody_default, null, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "lesson-modal"
  }, /* @__PURE__ */ import_react33.default.createElement("h3", null, props?.versesCovered), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "lesson-modal-video"
  }, /* @__PURE__ */ import_react33.default.createElement("iframe", {
    allowFullScreen: true,
    title: props.versesCovered,
    src: `https://player.vimeo.com/video/${props.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`
  })), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "lesson-modal-button"
  }, /* @__PURE__ */ import_react33.default.createElement(button_default, {
    title: "Download notes",
    buttonFunc: () => window.open(props.notesUrl)
  }))))), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "lesson-block-icons"
  }, props.videoId && /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "lesson-block-icons-image",
    onClick: modalToggle
  }, /* @__PURE__ */ import_react33.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react33.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  })), "Watch"), props.audioLink && /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "lesson-block-icons-image",
    onClick: () => {
      window.open(props.audioLink.split("?")[0]);
    }
  }, /* @__PURE__ */ import_react33.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react33.default.createElement("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  })), "Listen"), props.notesUrl && /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "lesson-block-icons-image",
    role: "button",
    onClick: () => window.open(props.notesUrl),
    target: "_blank"
  }, /* @__PURE__ */ import_react33.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react33.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  })), "Sermon ", /* @__PURE__ */ import_react33.default.createElement("br", null), "Manuscript"), props.questionsUrl && /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "lesson-block-icons-image",
    role: "button",
    onClick: () => window.open(props.questionsUrl),
    target: "_blank"
  }, /* @__PURE__ */ import_react33.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react33.default.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), "Application ", /* @__PURE__ */ import_react33.default.createElement("br", null), "Questions")));
}

// app/old-app/components/vbvmiStudy.js
init_react();
var import_react34 = __toESM(require_react());
function VbvmiStudy(props) {
  return /* @__PURE__ */ import_react34.default.createElement("div", {
    className: "study"
  }, /* @__PURE__ */ import_react34.default.createElement("span", null, /* @__PURE__ */ import_react34.default.createElement("img", {
    alt: "",
    src: sanityUrlFor(props.seriesImage).size(500, 300).url()
  }), /* @__PURE__ */ import_react34.default.createElement("h1", null, "The Book of ", /* @__PURE__ */ import_react34.default.createElement("br", null), props.title)), /* @__PURE__ */ import_react34.default.createElement("p", null, props.description), /* @__PURE__ */ import_react34.default.createElement("p", null, "The teaching material is hosted by our sister ministry, Verse by Verse Ministry. Access that teaching using the button below."), /* @__PURE__ */ import_react34.default.createElement(button_default, {
    size: "large",
    color: "green",
    title: `Listen to ${props.title}`,
    buttonFunc: () => window.open(props.ministrySeriesLink)
  }));
}

// app/old-app/pages/study-page.js
function StudyPage() {
  let { studyName } = useParams();
  const [isLoading, setIsLoading] = (0, import_react35.useState)(true);
  const [series, setSeries] = (0, import_react35.useState)({});
  const [seriesOver, setSeriesOver] = (0, import_react35.useState)(true);
  const [lessons, setLessons] = (0, import_react35.useState)({});
  const seriesQuery = `*[_type == 'series' && title == $studyName]{
    title, 
    location,
    meetingTime,
    endDate,
    isVbvmiStudy,
    ministrySeriesLink,
    childcareProvided,
    seriesImage,
    description,
    lessons[]{
      ...,
      'notesUrl' : notes.asset->url,
      'questionsUrl' : questions.asset->url
    },
    teacher->
  }`;
  const params = { studyName: studyName.replace("-", " ") };
  (0, import_react35.useEffect)(() => {
    sanity.fetch(seriesQuery, params).then((series2) => {
      setSeries(series2[0]);
      setLessons(series2[0].lessons);
      setIsLoading(false);
      setSeriesOver(isOver(series2[0].endDate));
    });
  }, [seriesQuery]);
  const hasContent = (lesson) => {
    if (lesson.videoId || lesson.audioLink) {
      return true;
    } else {
      return false;
    }
  };
  return /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "study-container"
  }, series?.isVbvmiStudy ? /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "vbvmi-study"
  }, /* @__PURE__ */ import_react35.default.createElement(Link, {
    className: "back-link",
    to: "/bible-studies"
  }, /* @__PURE__ */ import_react35.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react35.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  })), "Back to bible studies"), /* @__PURE__ */ import_react35.default.createElement(VbvmiStudy, {
    ...series
  })) : /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "study-info"
  }, /* @__PURE__ */ import_react35.default.createElement(Link, {
    className: "back-link",
    to: "/bible-studies"
  }, /* @__PURE__ */ import_react35.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react35.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  })), "Back to bible studies"), /* @__PURE__ */ import_react35.default.createElement("img", {
    alt: "",
    src: sanityUrlFor(series?.seriesImage).size(500, 300).url()
  }), /* @__PURE__ */ import_react35.default.createElement("h1", {
    className: "study-info-title"
  }, series?.title), /* @__PURE__ */ import_react35.default.createElement("div", {
    style: {
      gridTemplateRows: `${seriesOver ? "1fr" : "1fr 1fr"}`
    },
    className: "study-info-details"
  }, /* @__PURE__ */ import_react35.default.createElement("span", {
    className: "teacher-container"
  }, /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "teacher-container-photo"
  }, series?.teacher ? /* @__PURE__ */ import_react35.default.createElement("img", {
    alt: "",
    src: sanityUrlFor(series?.teacher?.image).auto("format").height(150).width(100).fit("clip")
  }) : /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "#66788d"
  }, /* @__PURE__ */ import_react35.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    "clip-rule": "evenodd"
  })))), /* @__PURE__ */ import_react35.default.createElement("span", {
    className: "supporting-text"
  }, "Taught by"), series?.teacher?.name ?? "Guest Teacher", " "), seriesOver && /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "study-info-details-lessons"
  }, /* @__PURE__ */ import_react35.default.createElement("h3", null, lessons.length), /* @__PURE__ */ import_react35.default.createElement("span", {
    className: "supporting-text"
  }, "lessons")), !seriesOver && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("div", null, /* @__PURE__ */ import_react35.default.createElement("h5", null, "Meeting Time"), !series?.meetingTime?.secondServiceTime ? /* @__PURE__ */ import_react35.default.createElement("p", null, ` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time}`) : /* @__PURE__ */ import_react35.default.createElement("p", null, ` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time} and ${series?.meetingTime.secondServiceTime}`)), /* @__PURE__ */ import_react35.default.createElement("div", null, /* @__PURE__ */ import_react35.default.createElement("h5", null, "Location"), /* @__PURE__ */ import_react35.default.createElement("p", null, series?.location)), /* @__PURE__ */ import_react35.default.createElement("div", null, /* @__PURE__ */ import_react35.default.createElement("h5", null, "Childcare"), /* @__PURE__ */ import_react35.default.createElement("p", null, series.childcareProvided ? /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, "Childcare is provided", /* @__PURE__ */ import_react35.default.createElement(Link, {
    style: { display: "block" },
    to: "/ministries/childrens-ministry"
  }, "Learn More")) : "None")))), /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "description"
  }, /* @__PURE__ */ import_react35.default.createElement("p", {
    className: "description-body"
  }, series?.description))), /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "lesson-list"
  }, /* @__PURE__ */ import_react35.default.createElement("h3", {
    className: "lesson-list-title"
  }, "Lessons"), isLoading ? /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("p", null, "Loading Lessons"), /* @__PURE__ */ import_react35.default.createElement(Spinner_default, {
    color: "dark"
  })) : lessons.map((lesson, index4) => {
    return hasContent(lesson) ? /* @__PURE__ */ import_react35.default.createElement(LessonBlock, {
      key: index4,
      ...lesson
    }) : null;
  }))));
}

// app/old-app/pages/livestream.js
init_react();
var import_react42 = __toESM(require_react());

// app/old-app/components/stream.js
init_react();
var import_react39 = __toESM(require_react());

// app/old-app/components/connect-widget.js
init_react();
var import_react37 = __toESM(require_react());
function ConnectWidget() {
  const [kidsUnit, setKidsUnit] = (0, import_react37.useState)("");
  const kidsQuery = `*[_type == "childrensUnit"] | order(_createdAt desc) [0] {unitNumber}`;
  (0, import_react37.useEffect)(() => {
    sanity.fetch(kidsQuery).then((unit) => {
      setKidsUnit(unit.unitNumber);
    });
  }, [kidsQuery]);
  return /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "connect-widget"
  }, /* @__PURE__ */ import_react37.default.createElement("h5", null, "VBVF Resources"), /* @__PURE__ */ import_react37.default.createElement("ul", null, /* @__PURE__ */ import_react37.default.createElement("li", null, kidsUnit === "" ? /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, "Loading ", /* @__PURE__ */ import_react37.default.createElement(Spinner_default, {
    color: "dark"
  })) : /* @__PURE__ */ import_react37.default.createElement(Link, {
    to: `/childrens-content/unit-${kidsUnit}`
  }, "Journey Kids Lesson")), /* @__PURE__ */ import_react37.default.createElement("li", null, /* @__PURE__ */ import_react37.default.createElement(Link, {
    to: "/about/faq"
  }, "Read our FAQ")), /* @__PURE__ */ import_react37.default.createElement("li", null, /* @__PURE__ */ import_react37.default.createElement(Link, {
    to: "/about/beliefs"
  }, "What we believe")), /* @__PURE__ */ import_react37.default.createElement("li", null, /* @__PURE__ */ import_react37.default.createElement(Link, {
    to: "/bible-studies"
  }, "More bible teaching"))), /* @__PURE__ */ import_react37.default.createElement("h5", null, "Get in Touch"), /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "connect-widget-button-container"
  }, /* @__PURE__ */ import_react37.default.createElement(button_default, {
    size: "small",
    color: "green",
    link: "https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true",
    title: "Connect with us"
  }), /* @__PURE__ */ import_react37.default.createElement(button_default, {
    size: "small",
    color: "green",
    link: "https://vbvf.churchcenter.com/people/forms/34407?open-in-church-center-modal=true",
    title: "Prayer Request"
  })), /* @__PURE__ */ import_react37.default.createElement("h5", null, "Give to VBVF"), /* @__PURE__ */ import_react37.default.createElement(button_default, {
    size: "medium",
    title: "Give now",
    color: "green",
    buttonFunc: () => {
      window.fathom.trackGoal("7KDLHSBK", 0);
    },
    link: "https://vbvf.churchcenter.com/giving?open-in-church-center-modal=true"
  }));
}

// app/old-app/components/stream.js
function Stream(props) {
  return /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "stream"
  }, /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "stream-video-player"
  }, /* @__PURE__ */ import_react39.default.createElement("iframe", {
    title: props.title,
    src: props.streamUrl,
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true
  })), /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "stream-supporting-materials"
  }, /* @__PURE__ */ import_react39.default.createElement(ConnectWidget, null), /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "stream-supporting-materials-from-cms"
  }, /* @__PURE__ */ import_react39.default.createElement("h2", null, props.title), props.notesUrl && /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "documents"
  }, /* @__PURE__ */ import_react39.default.createElement(button_default, {
    title: "Sermon Notes",
    size: "md",
    color: "green",
    buttonFunc: () => window.open(props.notesUrl)
  }), /* @__PURE__ */ import_react39.default.createElement(button_default, {
    title: "Application Questions",
    size: "md",
    color: "green",
    buttonFunc: () => window.open(props.questionUrl)
  })), /* @__PURE__ */ import_react39.default.createElement("p", null, props.description), props.seriesLink && /* @__PURE__ */ import_react39.default.createElement(Link, {
    to: props.seriesLink
  }, "Watch the rest of this series"))));
}

// app/old-app/components/memorial-service.js
init_react();
var import_react41 = __toESM(require_react());
function MemorialService(props) {
  return /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "stream"
  }, /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "stream-video-player"
  }, /* @__PURE__ */ import_react41.default.createElement("iframe", {
    title: "Memorial Service for Stephen Armstrong",
    src: "https://vimeo.com/event/1105908/embed",
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true
  })), /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "stream-supporting-materials"
  }, /* @__PURE__ */ import_react41.default.createElement(ConnectWidget, null), /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "memorial-info"
  }, /* @__PURE__ */ import_react41.default.createElement("h2", null, "Celebration of life for Stephen Armstrong"), /* @__PURE__ */ import_react41.default.createElement("span", {
    id: "streaming-difficulties"
  }, "If you're experiencing streaming difficulties,", " ", /* @__PURE__ */ import_react41.default.createElement("a", {
    href: "https://www.facebook.com/vbvfellowship"
  }, "please watch the Facebook Live stream here.")), /* @__PURE__ */ import_react41.default.createElement("h3", null, "Service Program"), /* @__PURE__ */ import_react41.default.createElement("ul", null, /* @__PURE__ */ import_react41.default.createElement("li", null, "Welcome - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Pastor Wesley Livingston")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Opening Prayer - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Pastor Mike Morris")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Worship - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Charlie & Amy Haley")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Elder Board Remarks - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Bob Butler")), /* @__PURE__ */ import_react41.default.createElement("li", null, "VBVMI Remarks - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Greg Driver")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Oak Hill Bible Church | Austin, TX - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Kirk Cameron")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Moving Forward - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Jim Rowland")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Worship - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Charlie & Amy Haley")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Closing Prayer - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Jerry Dyke")), /* @__PURE__ */ import_react41.default.createElement("li", null, "Dismissal - ", /* @__PURE__ */ import_react41.default.createElement("i", null, "Pastor Wesley Livingston"))))));
}

// app/old-app/pages/livestream.js
var sortBy = require_lodash();
function Livestream() {
  const [wednesdaySeries, setWednesdaySeries] = (0, import_react42.useState)({});
  const [sundaySeries, setSundaySeries] = (0, import_react42.useState)({});
  const wednesdayQuery = `*[_type == "series" && meetingTime.day == "Wednesday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url
}`;
  const sundayQuery = `*[_type == "series" && meetingTime.day == "Sunday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url
}`;
  (0, import_react42.useEffect)(() => {
    sanity.fetch(wednesdayQuery).then((wednesdaySeries2) => {
      setWednesdaySeries(wednesdaySeries2.find((series) => !isOver(series.endDate)));
    });
  }, [wednesdayQuery]);
  (0, import_react42.useEffect)(() => {
    sanity.fetch(sundayQuery).then((sundaySeries2) => {
      setSundaySeries(sundaySeries2.find((series) => !isOver(series.endDate)));
    });
  }, [sundayQuery]);
  const [sundayArchiveVideos, setSundayArchiveVideos] = (0, import_react42.useState)({});
  const [isLoading, setIsLoading] = (0, import_react42.useState)(true);
  (0, import_react42.useEffect)(() => {
    getVideos("1553779").then((vidArr) => {
      setSundayArchiveVideos(vidArr.data.data);
      setIsLoading(false);
    });
  }, []);
  const noStreamMessage = /* @__PURE__ */ import_react42.default.createElement("p", null, "Verse by Verse Fellowship livestreams its Sunday services. While there's not a service streaming right now, please feel free to check out some of our recent services below. Recordings of our services are available on our", " ", /* @__PURE__ */ import_react42.default.createElement(Link, {
    to: "/bible-studies"
  }, "Bible Studies"), " page.");
  const streamArchive = () => {
    const sortedVideos = sortBy(sundayArchiveVideos, "last_user_action_event_date").reverse();
    return sortedVideos.slice(0, 3).map((video) => /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement("h3", null, video.name), /* @__PURE__ */ import_react42.default.createElement("div", {
      className: "livestream-archive-video-player",
      dangerouslySetInnerHTML: createMarkup(video)
    })));
  };
  function createMarkup(video) {
    return { __html: video.embed.html };
  }
  return /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "livestream"
  }, /* @__PURE__ */ import_react42.default.createElement("h1", null, "Livestream"), isLoading ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement("p", null, "Loading Services"), /* @__PURE__ */ import_react42.default.createElement(Spinner_default, {
    color: "dark"
  })) : /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, livestreamHappeningNow() === "wednesday" ? /* @__PURE__ */ import_react42.default.createElement(Stream, {
    streamUrl: "https://vimeo.com/event/49116/embed",
    title: wednesdaySeries.title,
    description: wednesdaySeries.description,
    seriesLink: `/bible-studies/${wednesdaySeries.title}`,
    notesUrl: wednesdaySeries.notesUrl,
    questionUrl: wednesdaySeries.questionUrl
  }) : livestreamHappeningNow() === "sunday" ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement(Stream, {
    streamUrl: "https://vimeo.com/event/51649/embed",
    title: sundaySeries.title,
    description: sundaySeries.description,
    seriesLink: `/bible-studies/${sundaySeries.title}`,
    notesUrl: sundaySeries.notesUrl,
    questionUrl: sundaySeries.questionUrl
  })) : livestreamHappeningNow() === "memorial" ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement(MemorialService, null)) : livestreamHappeningNow() === "guestTeacher" ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement(Stream, {
    streamUrl: "https://vimeo.com/event/51649/embed",
    title: "",
    description: ""
  })) : livestreamHappeningNow() === "christmas" ? /* @__PURE__ */ import_react42.default.createElement(import_react42.default.Fragment, null, /* @__PURE__ */ import_react42.default.createElement(Stream, {
    streamUrl: "https://vimeo.com/event/51649/embed",
    title: "Christmas Eve Service",
    description: "Luke 2:22-35"
  })) : /* @__PURE__ */ import_react42.default.createElement("div", {
    className: "livestream-archive"
  }, /* @__PURE__ */ import_react42.default.createElement("div", null, noStreamMessage), streamArchive())));
}

// app/old-app/pages/attend-service.js
init_react();
var import_react44 = __toESM(require_react());
var import_block_content_to_react7 = __toESM(require_BlockContent());
function AttendService() {
  const [pageData, setPageData] = (0, import_react44.useState)();
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react44.useState)(true);
  const query = `*[_type == "page" && title == "Attend a Service"]{
    paragraphs,
    faq,
    scripture
  }`;
  (0, import_react44.useEffect)(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react44.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react44.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react44.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react44.default.createElement("li", null, props.children)
    }
  };
  const paragraphs = pageData?.paragraphs.map((paragraph) => /* @__PURE__ */ import_react44.default.createElement("section", null, /* @__PURE__ */ import_react44.default.createElement("h4", null, paragraph.paragraphTitle), /* @__PURE__ */ import_react44.default.createElement(import_block_content_to_react7.default, {
    blocks: paragraph.bodyText,
    serializers
  })));
  return /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "attend"
  }, /* @__PURE__ */ import_react44.default.createElement("h1", null, "Attending a Service ", /* @__PURE__ */ import_react44.default.createElement("br", null), /* @__PURE__ */ import_react44.default.createElement("span", {
    id: "highlight"
  }, "Verse by Verse Fellowship")), /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "attend-desc"
  }, pageDataIsLoading ? /* @__PURE__ */ import_react44.default.createElement(Spinner_default, {
    color: "dark"
  }) : paragraphs), /* @__PURE__ */ import_react44.default.createElement("p", null, " ", "For more information, please contact the church at info@vbvf.org or call 210-460-7556."));
}

// app/old-app/components/faq.js
init_react();
var import_react47 = __toESM(require_react());

// app/old-app/components/about-menu.js
init_react();
var import_react45 = __toESM(require_react());
var AboutMenu = () => {
  return /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "about-menu"
  }, /* @__PURE__ */ import_react45.default.createElement(Nav_default, null, /* @__PURE__ */ import_react45.default.createElement(NavLink, {
    exact: true,
    activeClassName: "active",
    to: "/about/faq"
  }, "FAQ"), /* @__PURE__ */ import_react45.default.createElement(NavLink, {
    exact: true,
    activeClassName: "active",
    to: "/about/leadership"
  }, "Leadership"), /* @__PURE__ */ import_react45.default.createElement(NavLink, {
    exact: true,
    activeClassName: "active",
    to: "/about/our-story"
  }, "Our Story"), /* @__PURE__ */ import_react45.default.createElement(NavLink, {
    exact: true,
    activeClassName: "active",
    to: "/about/beliefs"
  }, "Our Beliefs")));
};
var about_menu_default = AboutMenu;

// app/old-app/components/faq.js
function FAQ() {
  const query = `*[_type == "page" && title == "About Page"]{...}`;
  const [pageData, setPageData] = (0, import_react47.useState)([]);
  const [faqIsLoading, setFaqIsLoading] = (0, import_react47.useState)(true);
  (0, import_react47.useEffect)(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setFaqIsLoading(!faqIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react47.default.createElement("div", {
    className: "faq"
  }, /* @__PURE__ */ import_react47.default.createElement(AlertBubble, null), /* @__PURE__ */ import_react47.default.createElement(about_menu_default, null), faqIsLoading ? /* @__PURE__ */ import_react47.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react47.default.createElement(import_react47.default.Fragment, null, /* @__PURE__ */ import_react47.default.createElement("h1", null, "FAQ"), /* @__PURE__ */ import_react47.default.createElement(FrequentlyAskedQuestions, {
    faq: pageData?.faq.faqs,
    layout: "vertical"
  })));
}

// app/old-app/components/our-story.js
init_react();
var import_react48 = __toESM(require_react());
function OurStory() {
  return /* @__PURE__ */ import_react48.default.createElement("div", {
    className: "our-story"
  }, /* @__PURE__ */ import_react48.default.createElement(about_menu_default, null), /* @__PURE__ */ import_react48.default.createElement("div", {
    className: "our-story-text"
  }, /* @__PURE__ */ import_react48.default.createElement("h1", null, "Our Story"), /* @__PURE__ */ import_react48.default.createElement("p", null, "Verse By Verse Fellowship (VBVF) is the result of a church planting effort by Verse By Verse Ministry International (VBVMI), a non-denominational, Bible teaching ministry headquartered in San Antonio, Texas. Steve Armstrong was the President from VBVMI\u2019s inception until January 2021 when God called him home. VBVMI features the in-depth Bible teaching of Pastor Stephen Armstrong. The ministry is committed to providing compelling, verse-by-verse teaching of God\u2019s word at no charge (2Cor 2:17), thus ensuring the whole counsel of God is proclaimed (Acts 20:27)", " "), /* @__PURE__ */ import_react48.default.createElement("p", null, "On March 6, 2022, Tony Caffey Joined VBVF as its Senior Pastor. Our vision at VBVF is to reassert the importance and necessity of the public proclamation of God\u2019s word through expository Bible teaching from the pulpit. We believe that when the Bible is taught methodically and properly, good things happen: lives are changed, relationships are restored, marriages are strengthened, addictions are cured, ministries begin and souls are saved."), " ", /* @__PURE__ */ import_react48.default.createElement("p", null, " ", "As Christ followers, we are commanded by scripture to be lifelong students of God\u2019s Word and walk in community with each other. Come share in that mission at Verse By Verse Fellowship.")));
}

// app/old-app/components/beliefs.js
init_react();
var import_react49 = __toESM(require_react());
function Beliefs() {
  return /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "beliefs-values"
  }, /* @__PURE__ */ import_react49.default.createElement(about_menu_default, null), /* @__PURE__ */ import_react49.default.createElement("div", {
    className: "beliefs-values-text"
  }, /* @__PURE__ */ import_react49.default.createElement("h2", null, "Core Values"), /* @__PURE__ */ import_react49.default.createElement("h3", null, "A reliance on scripture. "), /* @__PURE__ */ import_react49.default.createElement("span", {
    className: "scripture"
  }, "(2 Peter 1:3)"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Life and godliness are found in a knowledge of His Word."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "An appreciation of preaching. "), /* @__PURE__ */ import_react49.default.createElement("span", {
    className: "scripture"
  }, "(2 Timothy 4:1-2)"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Proclaiming God\u2019s word is our first and greatest responsibility."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "An attitude of serving. "), /* @__PURE__ */ import_react49.default.createElement("span", {
    className: "scripture"
  }, "(Ephesians 4:11-13)"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Equipping Christ\u2019s followers to serve Him is our purpose."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "A lifestyle of witnessing. "), /* @__PURE__ */ import_react49.default.createElement("span", {
    className: "scripture"
  }, "(Matthew 5:16)"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Preaching the Gospel of Jesus Christ by word and deed is our privilege."), /* @__PURE__ */ import_react49.default.createElement("br", null), /* @__PURE__ */ import_react49.default.createElement("h2", null, "Core Beliefs"), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Nature of God"), /* @__PURE__ */ import_react49.default.createElement("p", null, "There is one God who eternally exists as three Persons (Father, Son, and Holy Spirit) and is the Sovereign Creator of all things (Genesis 1:1)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Scripture"), /* @__PURE__ */ import_react49.default.createElement("p", null, "We believe that the Scriptures have given us everything pertaining to life and godliness, including not only salvation from the penalty of sin but instruction in righteousness for present sanctification and service to the glory of God. God is the final authority as revealed in His perfect, trustworthy, and inspired Word, which unfolds His character and His purposes (2 Timothy 3:16-17).", " "), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Purpose of God"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Everyone and everything has been made by God and for God and therefore all glory belongs to Him (Colossians 1:15-20)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Humanity"), /* @__PURE__ */ import_react49.default.createElement("p", null, "All humanity was created in the image of God, and that when Adam sinned he placed all mankind into both physical and spiritual death; thus humanity became alienated from God, totally depraved, and incapable of remedying our sinful condition by our own means. (Genesis 1:27)"), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Sin"), /* @__PURE__ */ import_react49.default.createElement("p", null, "The world is fallen, and all humanity is separated from God because of sin (Genesis 3:1-24; Romans 3:23)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Nature of Jesus"), /* @__PURE__ */ import_react49.default.createElement("p", null, "The Lord Jesus Christ was begotten of the Father through the Holy Spirit, was born of the virgin Mary, and is wholly man and wholly God. (Matthew 1:18-25)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Jesus' Death & Resurrection"), /* @__PURE__ */ import_react49.default.createElement("p", null, "The Lord Jesus Christ lived a sinless and perfect life that fully pleased His Father; that He died on the cross for the sins of those who turn to Him in faith, and that He bore the judgment demanded by God\u2019s holy justice against sin, so that God remains just and at the same time justifies those who believe in Jesus. Jesus Christ rose bodily from the dead, never to die again, and ascended to the right hand of the Father, where He intercedes as High Priest and Advocate on behalf of all who believe in Him. (1 Corinthians 15:1-8)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Salvation"), /* @__PURE__ */ import_react49.default.createElement("p", null, "Salvation comes by grace, through faith in the finished work of Jesus Christ on the cross plus nothing on the part of humanity (Ephesians 2:1-10)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Holy Spirit"), /* @__PURE__ */ import_react49.default.createElement("p", null, "The Holy Spirit baptizes all true believers into the one true Church, the body of Christ, indwells every believer eternally, bestows spiritual gifts upon them and empowers them for service and holy living. The Holy Spirit convicts of sin, seals at conversion, gifts, guides, and empowers the believer and the church (John 16:5-15; Ephesians 1:13; Acts 1:8)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Church"), /* @__PURE__ */ import_react49.default.createElement("p", null, "The church is the body of Christ, with Christ as the Head, and functions to fulfill the mission of God (1 Corinthians 12:1-31)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Jesus' Return and the Kingdom"), /* @__PURE__ */ import_react49.default.createElement("p", null, "We eagerly await Christ\u2019s imminent return for the Church, when believers will receive a new body at the resurrection. We believe the church will return to Earth with Jesus at His promised Second Coming, when He will establish and rule over His 1,000-year Kingdom centered in Jerusalem. At the conclusion of the Kingdom, the world will experience a final judgment, after which the Father, Son and Spirit will dwell eternally among God\u2019s people in the coming New Heavens and Earth called the New Jerusalem. (John 14:1-5; 1Corinthians 15; Revelation 20-22; Matthew 24:1-51, 25:1-46)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "The Eternal State of Humanity"), /* @__PURE__ */ import_react49.default.createElement("p", null, "All people who have faith in Jesus Christ will spend eternity with God in His Kingdom, while all people who do not have faith in Jesus Christ remain in their sins and receive the just penalty of eternal separation from God in the Lake of Fire. (Matthew 25:1-46; John 5:24; Revelation 20:11-15)."), /* @__PURE__ */ import_react49.default.createElement("h3", null, "Baptism and the Lord's Supper"), /* @__PURE__ */ import_react49.default.createElement("p", null, "We believe that two ordinances, water (i.e., believer\u2019s) baptism and the Lord\u2019s Supper, neither of which is essential to salvation, are to be observed by all believers in obedience to our Lord until Christ\u2019s return.")));
}

// app/old-app/components/leadership.js
init_react();
var import_react51 = __toESM(require_react());

// app/old-app/components/photo-title.js
init_react();
var import_react50 = __toESM(require_react());
function PhotoTitle(props) {
  return /* @__PURE__ */ import_react50.default.createElement("div", {
    className: "person"
  }, /* @__PURE__ */ import_react50.default.createElement("img", {
    loading: props.role === "Elder" ? "eager" : "lazy",
    src: props.photo,
    alt: props.name
  }), /* @__PURE__ */ import_react50.default.createElement("p", null, props.name, props.role ? /* @__PURE__ */ import_react50.default.createElement("span", null, props.role) : /* @__PURE__ */ import_react50.default.createElement("span", null), props.title ? /* @__PURE__ */ import_react50.default.createElement("span", null, props.title) : /* @__PURE__ */ import_react50.default.createElement("span", null), props.email ? /* @__PURE__ */ import_react50.default.createElement("span", null, props.email) : /* @__PURE__ */ import_react50.default.createElement("span", null)));
}

// app/old-app/components/leadership.js
function Leadership() {
  const elderQuery = `*[_type == "person" && (role == "Elder" || role == "Senior Pastor")] | order(name asc)`;
  const pastorQuery = `*[_type == "person" && role == "Associate Pastor"] | order(name asc)`;
  const directorQuery = `*[_type == "person" && role == "Ministry Director" || role == "Staff" || role == "Volunteer Staff"] | order(name asc)`;
  const [elders, setElders] = (0, import_react51.useState)();
  const [pastors, setPastors] = (0, import_react51.useState)();
  const [directors, setDirectors] = (0, import_react51.useState)();
  (0, import_react51.useEffect)(() => {
    sanity.fetch(elderQuery).then((response) => {
      setElders(response);
    });
    sanity.fetch(pastorQuery).then((response) => {
      setPastors(response);
    });
    sanity.fetch(directorQuery).then((response) => {
      setDirectors(response);
    });
  }, []);
  return /* @__PURE__ */ import_react51.default.createElement("div", {
    className: "leadership"
  }, /* @__PURE__ */ import_react51.default.createElement(about_menu_default, null), /* @__PURE__ */ import_react51.default.createElement("h1", null, "Leadership"), /* @__PURE__ */ import_react51.default.createElement("br", null), /* @__PURE__ */ import_react51.default.createElement("h2", null, "Elders"), /* @__PURE__ */ import_react51.default.createElement("div", {
    className: "leadership-photo-array"
  }, elders?.map((elder) => /* @__PURE__ */ import_react51.default.createElement(PhotoTitle, {
    photo: sanityUrlFor(elder?.image).width(300),
    title: elder?.department,
    role: elder?.role,
    name: elder?.name
  }))), /* @__PURE__ */ import_react51.default.createElement("h2", null, "Pastors"), /* @__PURE__ */ import_react51.default.createElement("div", {
    className: "leadership-photo-array"
  }, pastors?.map((pastor) => /* @__PURE__ */ import_react51.default.createElement(PhotoTitle, {
    isLazy: "lazy",
    photo: sanityUrlFor(pastor?.image).width(300),
    title: pastor?.department,
    role: pastor?.role,
    name: pastor?.name,
    email: pastor?.email
  }))), /* @__PURE__ */ import_react51.default.createElement("h2", null, "Ministry Directors & Staff"), /* @__PURE__ */ import_react51.default.createElement("div", {
    className: "leadership-photo-array"
  }, directors?.map((director) => /* @__PURE__ */ import_react51.default.createElement(PhotoTitle, {
    isLazy: "lazy",
    photo: sanityUrlFor(director?.image).width(300),
    role: director?.role,
    title: director?.department,
    name: director?.name
  }))));
}

// app/old-app/pages/giving.js
init_react();
var import_react52 = __toESM(require_react());
var Giving = (props) => {
  const [onlineModal, setOnlineModal] = (0, import_react52.useState)(false);
  const [mailModal, setMailModal] = (0, import_react52.useState)(false);
  const onlineModalToggle = () => setOnlineModal(!onlineModal);
  const mailModalToggle = () => setMailModal(!mailModal);
  const [givingLink, setGivingLink] = (0, import_react52.useState)("/giving-redirect");
  (0, import_react52.useEffect)(() => {
    getMobileOperatingSystem() === "iOS" ? setGivingLink("/giving-redirect") : setGivingLink("https://vbvf.churchcenter.com/giving?open-in-church-center-modal=true");
  }, [givingLink]);
  return /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "giving"
  }, /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "giving-desc"
  }, /* @__PURE__ */ import_react52.default.createElement("h1", null, "Giving to VBVF"), /* @__PURE__ */ import_react52.default.createElement("p", null, "We're so grateful that you're interested in supporting Verse by Verse Fellowship.")), /* @__PURE__ */ import_react52.default.createElement(button_default, {
    size: "large",
    color: "green",
    link: givingLink,
    title: "Give Now"
  }), /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "giving-option-question"
  }, /* @__PURE__ */ import_react52.default.createElement("p", null, "I have questions about giving:"), /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "giving-option-question-icons"
  }, /* @__PURE__ */ import_react52.default.createElement("div", {
    onClick: onlineModalToggle,
    className: "giving-option-question-icons-option"
  }, /* @__PURE__ */ import_react52.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react52.default.createElement("path", {
    d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
  })), /* @__PURE__ */ import_react52.default.createElement("p", null, "Online"), /* @__PURE__ */ import_react52.default.createElement(Modal_default, {
    isOpen: onlineModal,
    toggle: onlineModalToggle,
    size: "lg"
  }, /* @__PURE__ */ import_react52.default.createElement(ModalHeader_default, {
    toggle: onlineModalToggle
  }, "Giving Online"), /* @__PURE__ */ import_react52.default.createElement(ModalBody_default, null, /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "giving-video"
  }, /* @__PURE__ */ import_react52.default.createElement("iframe", {
    title: "Giving Online",
    src: "https://www.youtube.com/embed/N9KAD-cMYxo",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /* @__PURE__ */ import_react52.default.createElement("p", null, "The video above explains the process of giving online. If you have more questions, please send us an email at", " ", /* @__PURE__ */ import_react52.default.createElement("a", {
    rel: "noopener noreferrer",
    href: "mailto:info@vbvf.org"
  }, "info@vbvf.org"))))), /* @__PURE__ */ import_react52.default.createElement("div", {
    onClick: mailModalToggle,
    className: "giving-option-question-icons-option"
  }, /* @__PURE__ */ import_react52.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react52.default.createElement("path", {
    d: "M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
  })), /* @__PURE__ */ import_react52.default.createElement("p", null, "By Mail"), /* @__PURE__ */ import_react52.default.createElement(Modal_default, {
    isOpen: mailModal,
    toggle: mailModalToggle,
    size: "lg"
  }, /* @__PURE__ */ import_react52.default.createElement(ModalHeader_default, {
    toggle: mailModalToggle
  }, "Giving Online"), /* @__PURE__ */ import_react52.default.createElement(ModalBody_default, null, /* @__PURE__ */ import_react52.default.createElement("p", null, "If you would like to give by mail, please send your gift to:", " "), /* @__PURE__ */ import_react52.default.createElement("span", {
    className: "giving-option-question-icons-option-mailing-address"
  }, "814 Arion Parkway, #410 San Antonio, TX 78216")))))));
};
var giving_default = Giving;

// app/old-app/components/childrens-unit-page.js
init_react();
var import_react53 = __toESM(require_react());
var import_smoothscroll_polyfill = __toESM(require_smoothscroll());
function ChildrensUnitPage() {
  let { unitId } = useParams();
  const [isLoading, setIsLoading] = (0, import_react53.useState)(true);
  const [unit, setUnit] = (0, import_react53.useState)({});
  const [lessons, setLessons] = (0, import_react53.useState)({});
  const [currentLesson, setCurrentLesson] = (0, import_react53.useState)({});
  import_smoothscroll_polyfill.default.polyfill();
  const unitQuery = `*[_type == "childrensUnit" && unitNumber == $unitNumber] [0] {
    unitNumber,
    title,
    seriesImage,
    description
  }`;
  const lessonQuery = `*[_type == "childrensLesson" && unit->unitNumber == $unitNumber] | order(lessonNumber asc) {
  title,
  videoId,
  "olderUrl" : olderWorksheet.asset->url,
  "youngerUrl":youngerWorksheet.asset->url,
  "preschoolUrl":preschoolWorksheet.asset->url,
  "number": lessonNumber
}`;
  const params = { unitNumber: unitId.split("-")[1] };
  (0, import_react53.useEffect)(() => {
    sanity.fetch(unitQuery, params).then((unit2) => {
      setUnit(unit2);
    });
    sanity.fetch(lessonQuery, params).then((lesson) => {
      setLessons(lesson);
      setCurrentLesson(lesson[0]);
      setIsLoading(false);
    });
  }, [unitQuery, lessonQuery]);
  return /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit"
  }, isLoading ? /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "loading-spinner"
  }, /* @__PURE__ */ import_react53.default.createElement("p", null, "Loading Unit"), /* @__PURE__ */ import_react53.default.createElement(Spinner_default, {
    color: "dark"
  })) : /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-content"
  }, /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-content-assets"
  }, /* @__PURE__ */ import_react53.default.createElement(Link, {
    to: "/childrens-content"
  }, "Back to Children's Content"), /* @__PURE__ */ import_react53.default.createElement("h3", {
    className: "unit-content-assets-title"
  }, `Unit ${unit.unitNumber} - ${unit.title}`), /* @__PURE__ */ import_react53.default.createElement("p", {
    className: "unit-content-assets-body"
  }, unit.description)), /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-content-video"
  }, /* @__PURE__ */ import_react53.default.createElement("iframe", {
    allowFullScreen: true,
    title: currentLesson.title,
    src: `https://player.vimeo.com/video/${currentLesson.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`
  })), /* @__PURE__ */ import_react53.default.createElement("h5", null, " ", "Currently Playing: Lesson ", currentLesson.number, " ", currentLesson.title)), /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-lesson-list"
  }, isLoading ? /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "loading-spinner"
  }, /* @__PURE__ */ import_react53.default.createElement("p", null, "Loading Lessons"), /* @__PURE__ */ import_react53.default.createElement(Spinner_default, {
    style: { alignSelf: "center" },
    color: "dark"
  })) : lessons.map((lesson, index4) => /* @__PURE__ */ import_react53.default.createElement("div", {
    className: `unit-lesson-list-item ${lesson.title === currentLesson.title ? "active" : " "}`,
    key: "index"
  }, /* @__PURE__ */ import_react53.default.createElement("button", {
    className: "mobile-play-button",
    onClick: () => {
      setCurrentLesson(lesson);
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }, /* @__PURE__ */ import_react53.default.createElement("h4", null, "Play Lesson ", lesson.number)), /* @__PURE__ */ import_react53.default.createElement("button", {
    className: "play-button",
    onClick: () => {
      setCurrentLesson(lesson);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, /* @__PURE__ */ import_react53.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ import_react53.default.createElement("path", {
    d: "M4 4l12 6-12 6z"
  })), /* @__PURE__ */ import_react53.default.createElement("h5", null, "Play Lesson")), /* @__PURE__ */ import_react53.default.createElement("h3", {
    className: "desktop-title"
  }, lesson.title, " ", /* @__PURE__ */ import_react53.default.createElement("span", null, "Lesson ", lesson.number)), /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-lesson-list-item-worksheets"
  }, /* @__PURE__ */ import_react53.default.createElement("h6", null, "Download Worksheets"), /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "unit-lesson-list-item-worksheets-group"
  }, /* @__PURE__ */ import_react53.default.createElement("button", {
    target: "blank",
    rel: "noopener noreferrer",
    onClick: () => window.open(lesson.preschoolUrl)
  }, "Preschool"), /* @__PURE__ */ import_react53.default.createElement("button", {
    target: "blank",
    rel: "noopener noreferrer",
    onClick: () => window.open(lesson.youngerUrl)
  }, "Kinder-2nd Grade"), /* @__PURE__ */ import_react53.default.createElement("button", {
    target: "blank",
    rel: "noopener noreferrer",
    onClick: () => window.open(lesson.olderUrl)
  }, "3rd-5th Grade")))))));
}

// app/old-app/pages/childrens-content-aggregator.js
init_react();
var import_react56 = __toESM(require_react());
function ChildrensContentAggregator() {
  const query = `*[_type == "childrensUnit"] | order(unitNumber asc) {
    unitNumber,
    title,
    seriesImage
  }`;
  const [childrensUnits, setChildrensUnits] = (0, import_react56.useState)([]);
  (0, import_react56.useEffect)(() => {
    sanity.fetch(query).then((results) => setChildrensUnits(results));
  }, [query]);
  return /* @__PURE__ */ import_react56.default.createElement("div", {
    className: "units"
  }, /* @__PURE__ */ import_react56.default.createElement("div", {
    className: "units-desc"
  }, /* @__PURE__ */ import_react56.default.createElement("h1", null, "Children's Teaching Materials")), childrensUnits.map((unit) => /* @__PURE__ */ import_react56.default.createElement(Link, {
    key: unit.unitNumber,
    className: "unit-link",
    to: `unit-${unit.unitNumber}`
  }, /* @__PURE__ */ import_react56.default.createElement("div", {
    className: "unit-icon"
  }, /* @__PURE__ */ import_react56.default.createElement(Card_default, {
    body: true
  }, /* @__PURE__ */ import_react56.default.createElement(CardImg_default, {
    top: true,
    width: "100%",
    src: sanityUrlFor(unit.seriesImage).width(500).url(),
    alt: `${unit.title} Image`
  }), /* @__PURE__ */ import_react56.default.createElement(CardTitle_default, null, `Unit ${unit.unitNumber}`), /* @__PURE__ */ import_react56.default.createElement(CardSubtitle_default, null, unit.title))))));
}

// app/old-app/pages/specialAnnouncement.js
init_react();
var import_react58 = __toESM(require_react());
var import_block_content_to_react8 = __toESM(require_BlockContent());
function Announcement() {
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react58.default.createElement("a", {
          href
        }, children);
      }
    }
  };
  let { announcementId } = useParams();
  const params = { announcementId };
  const query = `*[_type == "specialAnnouncement" && _id == $announcementId] {
        title,
        body,
        expirationDate,
        whereToDisplay,
        _createdAt,
        _id
    }`;
  const [specialAnnouncement, setSpecialAnnouncement] = (0, import_react58.useState)();
  const [isLoading, setIsLoading] = (0, import_react58.useState)(true);
  (0, import_react58.useEffect)(() => {
    sanity.fetch(query, params).then((results) => {
      setSpecialAnnouncement(results[0]);
      setIsLoading(!isLoading);
    });
  }, []);
  return /* @__PURE__ */ import_react58.default.createElement("div", {
    className: "announcement"
  }, isLoading ? /* @__PURE__ */ import_react58.default.createElement(import_react58.default.Fragment, null, "Loading Announcement", /* @__PURE__ */ import_react58.default.createElement(Spinner_default, null)) : /* @__PURE__ */ import_react58.default.createElement(import_react58.default.Fragment, null, !isOver(specialAnnouncement.expirationDate) ? /* @__PURE__ */ import_react58.default.createElement("div", {
    className: "announcement-text"
  }, /* @__PURE__ */ import_react58.default.createElement("h1", null, specialAnnouncement.title), /* @__PURE__ */ import_react58.default.createElement("h6", null, "Date posted: ", specialAnnouncement._createdAt.slice(0, 10)), /* @__PURE__ */ import_react58.default.createElement(import_block_content_to_react8.default, {
    blocks: specialAnnouncement.body,
    serializers
  }), /* @__PURE__ */ import_react58.default.createElement("h3", null, "Questions?"), /* @__PURE__ */ import_react58.default.createElement("p", null, "Please ", /* @__PURE__ */ import_react58.default.createElement(Link, {
    to: "/contact"
  }, "contact us."))) : /* @__PURE__ */ import_react58.default.createElement("div", {
    className: "no-announcement"
  }, /* @__PURE__ */ import_react58.default.createElement("h1", null, "No special announcements at this time"), /* @__PURE__ */ import_react58.default.createElement("h3", null, "Feel free to "), /* @__PURE__ */ import_react58.default.createElement("ul", null, /* @__PURE__ */ import_react58.default.createElement("li", null, /* @__PURE__ */ import_react58.default.createElement(Link, {
    to: "/bible-studies/"
  }, "Listen Bible teaching")), /* @__PURE__ */ import_react58.default.createElement("li", null, /* @__PURE__ */ import_react58.default.createElement(Link, {
    to: "about/faq"
  }, "Read more about VBVF")), /* @__PURE__ */ import_react58.default.createElement("li", null, /* @__PURE__ */ import_react58.default.createElement(Link, {
    to: "/livestream"
  }, "View recent livestreams"))))));
}

// app/old-app/pages/care-ministry.js
init_react();
var import_react70 = __toESM(require_react());
var import_block_content_to_react9 = __toESM(require_BlockContent());

// app/old-app/components/care-ministry-form.js
init_react();
var import_react60 = __toESM(require_react());
function CareMinistryForm({ closeFunc }) {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [isFormSubmitted, setIsFormSubmitted] = (0, import_react60.useState)(false);
  const encode = (data) => {
    return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  };
  return /* @__PURE__ */ import_react60.default.createElement("div", null, isFormSubmitted ? /* @__PURE__ */ import_react60.default.createElement("div", {
    className: "contact-submitted"
  }, /* @__PURE__ */ import_react60.default.createElement("div", {
    className: "contact-submitted-check-container"
  }, /* @__PURE__ */ import_react60.default.createElement(motion.svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: "contact-submitted-check-container-item"
  }, /* @__PURE__ */ import_react60.default.createElement(motion.path, {
    d: "M0 11l2-2 5 5L18 3l2 2L7 18z",
    variants: icon,
    initial: "hidden",
    animate: "visible",
    transition: {
      default: { duration: 2, ease: "easeInOut" },
      fill: { duration: 1, ease: [1, 0, 0.8, 1] }
    }
  }))), /* @__PURE__ */ import_react60.default.createElement("p", null, "Thanks for reaching out! We'll be in touch shortly.")) : /* @__PURE__ */ import_react60.default.createElement(Formik, {
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      contactOptions: [],
      haveReceivedPriorCounseling: false,
      counselor: "",
      contactPermission: "No"
    },
    validationSchema: ObjectSchema({
      fullName: StringSchema().max(20, "Must be 20 characters or less.").required("Name Required"),
      phoneNumber: StringSchema().when("contactOptions", {
        is: (val) => val.includes("Phone") === true,
        then: StringSchema().required("Phone Number Required").matches(phoneRegExp, "Please enter a valid phone number"),
        otherwise: StringSchema().matches(phoneRegExp, "Please enter a valid phone number")
      }),
      email: StringSchema().when("contactOptions", {
        is: (val) => val.includes("Email") === true,
        then: StringSchema().email("Invalid email address").required("Email Address Required"),
        otherwise: StringSchema().email("Invalid email address")
      }),
      contactOptions: array_default().min(1, "Please Select a Contact Preference")
    }),
    onSubmit: (values2, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "care-ministry-contact", ...values2 })
      }).then(() => {
        setIsFormSubmitted(true);
        actions.resetForm();
      }).catch(() => {
        console.error();
      }).finally(() => actions.setSubmitting(false));
    }
  }, ({ values: values2 }) => /* @__PURE__ */ import_react60.default.createElement(Form, {
    className: "care-ministry-form",
    method: "POST"
  }, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "hidden",
    name: "form-name",
    value: "care-ministry-contact"
  }), /* @__PURE__ */ import_react60.default.createElement("h2", null, "Contact Care Ministries"), /* @__PURE__ */ import_react60.default.createElement("label", {
    name: "fullName"
  }, "Full Name"), /* @__PURE__ */ import_react60.default.createElement(Field, {
    className: "text-field",
    name: "fullName",
    autoFocus: true
  }), /* @__PURE__ */ import_react60.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "fullName"
  }), /* @__PURE__ */ import_react60.default.createElement("label", {
    name: "email"
  }, "Email Address"), /* @__PURE__ */ import_react60.default.createElement(Field, {
    className: "text-field",
    name: "email",
    type: "email"
  }), /* @__PURE__ */ import_react60.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "email"
  }), /* @__PURE__ */ import_react60.default.createElement("label", {
    name: "phoneNumber"
  }, "Phone Number"), /* @__PURE__ */ import_react60.default.createElement(Field, {
    className: "text-field",
    name: "phoneNumber",
    type: "tel"
  }), /* @__PURE__ */ import_react60.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "phoneNumber"
  }), /* @__PURE__ */ import_react60.default.createElement("label", {
    name: "contactOptions"
  }, "Preferred method of contact"), /* @__PURE__ */ import_react60.default.createElement("span", {
    role: "group",
    className: "checkbox-group",
    name: "contactOptions"
  }, /* @__PURE__ */ import_react60.default.createElement("label", null, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "checkbox",
    name: "contactOptions",
    value: "Phone"
  }), "Phone"), /* @__PURE__ */ import_react60.default.createElement("label", null, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "checkbox",
    name: "contactOptions",
    value: "Email"
  }), "Email")), /* @__PURE__ */ import_react60.default.createElement(ErrorMessage, {
    component: "div",
    className: "contact-error-message",
    name: "contactOptions"
  }), /* @__PURE__ */ import_react60.default.createElement("span", {
    className: "previous-counseling"
  }, "Are you currently receiving or have you previously received counseling from VBVF?", /* @__PURE__ */ import_react60.default.createElement("label", null, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "checkbox",
    name: "haveReceivedPriorCounseling"
  }), "Yes"), values2.haveReceivedPriorCounseling && /* @__PURE__ */ import_react60.default.createElement(import_react60.default.Fragment, null, /* @__PURE__ */ import_react60.default.createElement("label", null, "If yes, with whom?", /* @__PURE__ */ import_react60.default.createElement(Field, {
    className: "text-field",
    name: "counselor",
    placeholder: "Enter their name"
  })), /* @__PURE__ */ import_react60.default.createElement("label", null, "May we have your permission to contact that person?", /* @__PURE__ */ import_react60.default.createElement("span", {
    role: "group",
    className: "checkbox-group"
  }, /* @__PURE__ */ import_react60.default.createElement("label", null, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "checkbox",
    name: "contactPermission",
    value: "Yes"
  }), "Yes"), /* @__PURE__ */ import_react60.default.createElement("label", null, /* @__PURE__ */ import_react60.default.createElement(Field, {
    type: "checkbox",
    name: "contactPermission",
    value: "No"
  }), "No"))))), /* @__PURE__ */ import_react60.default.createElement(button_default, {
    size: "medium",
    type: "submit",
    title: "Submit",
    color: "green"
  }))));
}

// node_modules/@reach/dialog/dist/reach-dialog.esm.js
init_react();
var import_react69 = __toESM(require_react());

// node_modules/@reach/portal/dist/reach-portal.esm.js
init_react();
var import_react63 = __toESM(require_react());

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
init_react();
var import_react61 = __toESM(require_react());

// node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js
init_react();
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
var useIsomorphicLayoutEffect2 = /* @__PURE__ */ canUseDOM() ? import_react61.useLayoutEffect : import_react61.useEffect;

// node_modules/@reach/utils/use-force-update/dist/reach-utils-use-force-update.esm.js
init_react();
var import_react62 = __toESM(require_react());
function useForceUpdate() {
  var _useState = (0, import_react62.useState)(/* @__PURE__ */ Object.create(null)), dispatch = _useState[1];
  return (0, import_react62.useCallback)(function() {
    dispatch(/* @__PURE__ */ Object.create(null));
  }, []);
}

// node_modules/@reach/portal/dist/reach-portal.esm.js
var import_react_dom = __toESM(require_react_dom());
var Portal = function Portal2(_ref2) {
  var children = _ref2.children, _ref$type = _ref2.type, type = _ref$type === void 0 ? "reach-portal" : _ref$type, containerRef = _ref2.containerRef;
  var mountNode = (0, import_react63.useRef)(null);
  var portalNode = (0, import_react63.useRef)(null);
  var forceUpdate = useForceUpdate();
  if (true) {
    (0, import_react63.useEffect)(function() {
      if (containerRef != null) {
        true ? tiny_warning_esm_default(typeof containerRef === "object" && "current" in containerRef, "@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : void 0;
        true ? tiny_warning_esm_default(containerRef ? containerRef.current != null : true, "@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.") : void 0;
      }
    }, [containerRef]);
  }
  useIsomorphicLayoutEffect2(function() {
    if (!mountNode.current)
      return;
    var ownerDocument = mountNode.current.ownerDocument;
    var body = (containerRef == null ? void 0 : containerRef.current) || ownerDocument.body;
    portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return function() {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? /* @__PURE__ */ (0, import_react_dom.createPortal)(children, portalNode.current) : /* @__PURE__ */ (0, import_react63.createElement)("span", {
    ref: mountNode
  });
};
if (true) {
  Portal.displayName = "Portal";
}

// node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js
init_react();
function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}

// node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js
init_react();
function isFunction4(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
function isString4(value) {
  return typeof value === "string";
}

// node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js
init_react();
function noop2() {
}

// node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js
init_react();
var import_react64 = __toESM(require_react());
var checkedPkgs = {};
function checkStyles(packageName) {
  if (true) {
    var _ref2 = typeof process !== "undefined" ? process.env : {
      NODE_ENV: "development"
    }, environment = _ref2.NODE_ENV;
    if (checkedPkgs[packageName])
      return;
    checkedPkgs[packageName] = true;
    if (environment === "development" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + ' styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n  \n      import "@reach/' + packageName + `/styles.css";
  
    Otherwise you'll need to include them some other way:
  
      <link rel="stylesheet" type="text/css" href="node_modules/@reach/` + packageName + '/styles.css" />\n  \n    For more information visit https://ui.reach.tech/styling.\n    ');
    }
  }
}
function useCheckStyles(packageName) {
  if (true) {
    var name = (0, import_react64.useRef)(packageName);
    (0, import_react64.useEffect)(function() {
      return void (name.current = packageName);
    }, [packageName]);
    (0, import_react64.useEffect)(function() {
      return checkStyles(name.current);
    }, []);
  }
}

// node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js
init_react();
var import_react65 = __toESM(require_react());
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction4(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error('Cannot assign value "' + value + '" to ref "' + ref + '"');
    }
  }
}
function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return (0, import_react65.useCallback)(function(node2) {
    for (var _iterator = _createForOfIteratorHelperLoose2(refs), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      assignRef(ref, node2);
    }
  }, refs);
}

// node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js
init_react();
function composeEventHandlers(theirHandler, ourHandler) {
  return function(event) {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

// node_modules/react-focus-lock/dist/es2015/index.js
init_react();

// node_modules/react-focus-lock/dist/es2015/Combination.js
init_react();
init_extends();
var React46 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
init_react();
init_extends();
var React43 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
init_react();
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/index.js
init_react();

// node_modules/use-callback-ref/dist/es2015/assignRef.js
init_react();
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
init_react();
var import_react66 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react66.useState)(function() {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
init_react();
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
}

// node_modules/react-focus-lock/dist/es2015/Lock.js
var import_react67 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
init_react();
var React41 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var children = _ref2.children;
  return /* @__PURE__ */ React41.createElement(React41.Fragment, null, /* @__PURE__ */ React41.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /* @__PURE__ */ React41.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};
InFocusGuard.defaultProps = {
  children: null
};

// node_modules/react-focus-lock/dist/es2015/medium.js
init_react();

// node_modules/use-sidecar/dist/es2015/index.js
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib9 = __toESM(require_tslib5(), 1);
var {
  __extends: __extends5,
  __assign: __assign6,
  __rest: __rest5,
  __decorate: __decorate5,
  __param: __param5,
  __metadata: __metadata5,
  __awaiter: __awaiter5,
  __generator: __generator5,
  __exportStar: __exportStar5,
  __createBinding: __createBinding5,
  __values: __values5,
  __read: __read5,
  __spread: __spread5,
  __spreadArrays: __spreadArrays5,
  __spreadArray,
  __await: __await5,
  __asyncGenerator: __asyncGenerator5,
  __asyncDelegator: __asyncDelegator5,
  __asyncValues: __asyncValues5,
  __makeTemplateObject: __makeTemplateObject5,
  __importStar: __importStar5,
  __importDefault: __importDefault5,
  __classPrivateFieldGet: __classPrivateFieldGet5,
  __classPrivateFieldSet: __classPrivateFieldSet5,
  __classPrivateFieldIn
} = import_tslib9.default;

// node_modules/use-sidecar/dist/es2015/medium.js
init_react();
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb2) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb2);
      }
      buffer = {
        push: function(x) {
          return cb2(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb2) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb2);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb2);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign6({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
init_react();
var React42 = __toESM(require_react());
var SideCar = function(_a2) {
  var sideCar2 = _a2.sideCar, rest = __rest5(_a2, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React42.createElement(Target, __assign6({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
});

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = /* @__PURE__ */ React43.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends22;
  var _React$useState = React43.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1];
  var observed = React43.useRef();
  var isActive = React43.useRef(false);
  var originalFocusedElement = React43.useRef(null);
  var children = props.children, disabled = props.disabled, noFocusGuards = props.noFocusGuards, persistentFocus = props.persistentFocus, crossFrame = props.crossFrame, autoFocus = props.autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, shouldReturnFocus = props.returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _React$useState2 = React43.useState({}), id = _React$useState2[0];
  var onActivation = React43.useCallback(function() {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React43.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  (0, import_react67.useEffect)(function() {
    if (!disabled) {
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = React43.useCallback(function(allowDefer) {
    var returnFocusTo = originalFocusedElement.current;
    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = React43.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = React43.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    React43.useEffect(function() {
      if (!observed.current) {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends22 = {}, _extends22[FOCUS_DISABLED] = disabled && "disabled", _extends22[FOCUS_GROUP] = group, _extends22), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /* @__PURE__ */ React43.createElement(React43.Fragment, null, hasLeadingGuards && [
    /* @__PURE__ */ React43.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? /* @__PURE__ */ React43.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && /* @__PURE__ */ React43.createElement(SideCar2, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions
  }), /* @__PURE__ */ React43.createElement(Container, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), children), hasTailingGuards && /* @__PURE__ */ React43.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
FocusLock.defaultProps = {
  children: void 0,
  disabled: false,
  returnFocus: false,
  focusOptions: void 0,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
init_react();
var React45 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/react-clientside-effect/lib/index.es.js
init_react();
var import_react68 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap2(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state);
    }
    var SideEffect = /* @__PURE__ */ function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index4 = mountedInstances.indexOf(this);
        mountedInstances.splice(index4, 1);
        emitChange();
      };
      _proto.render = function render() {
        return /* @__PURE__ */ import_react68.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react68.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/index.js
init_react();

// node_modules/focus-lock/dist/es2015/focusInside.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/array.js
init_react();
var toArray2 = function(a2) {
  var ret = Array(a2.length);
  for (var i = 0; i < a2.length; ++i) {
    ret[i] = a2[i];
  }
  return ret;
};
var asArray = function(a2) {
  return Array.isArray(a2) ? a2 : [a2];
};

// node_modules/focus-lock/dist/es2015/utils/is.js
init_react();
var isElementHidden = function(node2) {
  if (node2.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node2, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node2) {
  return node2.parentNode && node2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node2.parentNode.host : node2.parentNode;
};
var isTopNode = function(node2) {
  return node2 === document || node2 && node2.nodeType === Node.DOCUMENT_NODE;
};
var isVisibleUncached = function(node2, checkParent) {
  return !node2 || isTopNode(node2) || !isElementHidden(node2) && checkParent(getParentNode(node2));
};
var isVisibleCached = function(visibilityCache, node2) {
  var cached = visibilityCache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node2, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node2, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node2, checkParent) {
  return node2 && !isTopNode(node2) ? isAutoFocusAllowed(node2) ? checkParent(getParentNode(node2)) : false : true;
};
var isAutoFocusAllowedCached = function(cache2, node2) {
  var cached = cache2.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node2, isAutoFocusAllowedCached.bind(void 0, cache2));
  cache2.set(node2, result);
  return result;
};
var getDataset = function(node2) {
  return node2.dataset;
};
var isHTMLButtonElement = function(node2) {
  return node2.tagName === "BUTTON";
};
var isHTMLInputElement = function(node2) {
  return node2.tagName === "INPUT";
};
var isRadioElement = function(node2) {
  return isHTMLInputElement(node2) && node2.type === "radio";
};
var notHiddenInput = function(node2) {
  return !((isHTMLInputElement(node2) || isHTMLButtonElement(node2)) && (node2.type === "hidden" || node2.disabled));
};
var isAutoFocusAllowed = function(node2) {
  var attribute = node2.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node2) {
  var _a2;
  return Boolean(node2 && ((_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.focusGuard));
};
var isNotAGuard = function(node2) {
  return !isGuard(node2);
};
var isDefined = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
init_react();
var tabSort = function(a2, b2) {
  var tabDiff = a2.tabIndex - b2.tabIndex;
  var indexDiff = a2.index - b2.index;
  if (tabDiff) {
    if (!a2.tabIndex) {
      return 1;
    }
    if (!b2.tabIndex) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray2(nodes).map(function(node2, index4) {
    return {
      node: node2,
      index: index4,
      tabIndex: keepGuards && node2.tabIndex === -1 ? (node2.dataset || {}).focusGuard ? 0 : -1 : node2.tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
init_react();
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  var _a2;
  return toArray2(((_a2 = parent.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.children) || parent.children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    return acc.concat(getFocusablesWithShadowDom(parent, withGuards), parent.parentNode ? toArray2(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node2) {
      return node2 === parent;
    }) : []);
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray2(parentFocus).map(function(node2) {
    return getFocusables([node2]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray2(nodes).filter(function(node2) {
    return isVisibleCached(visibilityCache, node2);
  }).filter(function(node2) {
    return notHiddenInput(node2);
  });
};
var filterAutoFocusable = function(nodes, cache2) {
  if (cache2 === void 0) {
    cache2 = /* @__PURE__ */ new Map();
  }
  return toArray2(nodes).filter(function(node2) {
    return isAutoFocusAllowedCached(cache2, node2);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains = function(scope, element) {
  return (scope.shadowRoot ? contains(scope.shadowRoot, element) : Object.getPrototypeOf(scope).contains.call(scope, element)) || toArray2(scope.children).some(function(child) {
    return contains(child, element);
  });
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
init_react();
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index4) {
    return !contained.has(index4);
  });
};
var getTopParent = function(node2) {
  return node2.parentNode ? getTopParent(node2.parentNode) : node2;
};
var getAllAffectedNodes = function(node2) {
  var nodes = asArray(node2);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray2(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
init_react();
var getNestedShadowActiveElement = function(shadowRoot) {
  return shadowRoot.activeElement ? shadowRoot.activeElement.shadowRoot ? getNestedShadowActiveElement(shadowRoot.activeElement.shadowRoot) : shadowRoot.activeElement : void 0;
};
var getActiveElement2 = function() {
  return document.activeElement ? document.activeElement.shadowRoot ? getNestedShadowActiveElement(document.activeElement.shadowRoot) : document.activeElement : void 0;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame2) {
  return frame2 === document.activeElement;
};
var focusInsideIframe = function(topNode) {
  return Boolean(toArray2(topNode.querySelectorAll("iframe")).some(function(node2) {
    return focusInFrame(node2);
  }));
};
var focusInside = function(topNode) {
  var activeElement = document && getActiveElement2();
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node2) {
    return contains(node2, activeElement) || focusInsideIframe(node2);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
init_react();
var focusIsHidden = function() {
  var activeElement = document && getActiveElement2();
  if (!activeElement) {
    return false;
  }
  return toArray2(document.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node2) {
    return contains(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusMerge.js
init_react();

// node_modules/focus-lock/dist/es2015/solver.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
init_react();
var findSelectedRadio = function(node2, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node2.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node2;
};
var correctNode = function(node2, nodes) {
  if (isRadioElement(node2) && node2.name) {
    return findSelectedRadio(node2, nodes);
  }
  return node2;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node2) {
    return resultSet.add(correctNode(node2, nodes));
  });
  return nodes.filter(function(node2) {
    return resultSet.has(node2);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
init_react();
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, index4) {
  if (nodes.length > 1) {
    return nodes.indexOf(correctNode(nodes[index4], nodes));
  }
  return index4;
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
init_react();
var getParents = function(node2, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node2);
  if (node2.parentNode) {
    getParents(node2.parentNode.host || node2.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node2) {
    return acc.concat(parentAutofocusables(node2, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusMerge.js
var findAutoFocused = function(autoFocusables) {
  return function(node2) {
    var _a2;
    return node2.autofocus || !!((_a2 = getDataset(node2)) === null || _a2 === void 0 ? void 0 : _a2.autofocus) || autoFocusables.indexOf(node2) >= 0;
  };
};
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node2) {
    return remap.get(node2);
  }).filter(isDefined);
};
var getFocusMerge = function(topNode, lastNode) {
  var activeElement = document && getActiveElement2();
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a2) {
    var node2 = _a2.node;
    return isNotAGuard(node2);
  });
  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return void 0;
    }
  }
  var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var autoFocusable = filterAutoFocusable(anyFocusable.map(function(_a2) {
      var node2 = _a2.node;
      return node2;
    })).filter(findAutoFocused(allParentAutofocusables(entries, visibilityCache)));
    return {
      node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(filterAutoFocusable(innerNodes))
    };
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
init_react();
var getFocusabledIn = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a2) {
    var node2 = _a2.node;
    return isNotAGuard(node2);
  }).map(function(_a2) {
    var node2 = _a2.node;
    return node2;
  });
  return outerNodes.map(function(_a2) {
    var node2 = _a2.node, index4 = _a2.index;
    return {
      node: node2,
      index: index4,
      lockItem: innerElements.indexOf(node2) >= 0,
      guard: isGuard(node2)
    };
  });
};

// node_modules/focus-lock/dist/es2015/setFocus.js
init_react();
var focusOn = function(target, focusOptions) {
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = getFocusMerge(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/index.js
var es2015_default = setFocus;

// node_modules/react-focus-lock/dist/es2015/util.js
init_react();
function deferAction(action2) {
  var _window = window, setImmediate = _window.setImmediate;
  if (typeof setImmediate !== "undefined") {
    setImmediate(action2);
  } else {
    setTimeout(action2, 1);
  }
}

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = es2015_default(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }
      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node2 = _ref2.node;
          return node2;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref2) {
            var guard = _ref2.guard, node2 = _ref2.node;
            return guard && node2.dataset.focusAutoGuard;
          }).forEach(function(_ref3) {
            var node2 = _ref3.node;
            return node2.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref4) {
  var children = _ref4.children;
  return /* @__PURE__ */ React45.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowBlur = function onWindowBlur2() {
  focusWasOutsideWindow = "just";
  setTimeout(function() {
    focusWasOutsideWindow = "meanwhile";
  }, 0);
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("blur", onWindowBlur);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("blur", onWindowBlur);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb2) {
  return cb2({
    moveFocusInside: es2015_default,
    focusInside
  });
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = /* @__PURE__ */ React46.forwardRef(function FocusLockUICombination(props, ref) {
  return /* @__PURE__ */ React46.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default2 = Combination_default;

// node_modules/react-remove-scroll/dist/es2015/index.js
init_react();

// node_modules/react-remove-scroll/dist/es2015/Combination.js
init_react();
var React51 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
init_react();
var React47 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
init_react();
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
init_react();
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React47.forwardRef(function(props, parentRef) {
  var ref = React47.useRef(null);
  var _a2 = React47.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a2[0], setCallbacks = _a2[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b2 = props.as, Container = _b2 === void 0 ? "div" : _b2, rest = __rest5(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign6(__assign6({}, rest), callbacks);
  return React47.createElement(React47.Fragment, null, enabled && React47.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }), forwardProps ? React47.cloneElement(React47.Children.only(children), __assign6(__assign6({}, containerProps), { ref: containerRef })) : React47.createElement(Container, __assign6({}, containerProps, { className, ref: containerRef }), children));
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
init_react();

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
init_react();
var React50 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/index.js
init_react();

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
init_react();
var React49 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/index.js
init_react();

// node_modules/react-style-singleton/dist/es2015/component.js
init_react();

// node_modules/react-style-singleton/dist/es2015/hook.js
init_react();
var React48 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/singleton.js
init_react();

// node_modules/get-nonce/dist/es2015/index.js
init_react();
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles2, isDynamic) {
    React48.useEffect(function() {
      sheet.add(styles2);
      return function() {
        sheet.remove();
      };
    }, [styles2 && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a2) {
    var styles2 = _a2.styles, dynamic = _a2.dynamic;
    useStyle(styles2, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
init_react();
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  if (true) {
    if (cs.overflowY === "hidden") {
      console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
    }
  }
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a2, allowRelative, gapMode, important) {
  var left = _a2.left, top = _a2.top, right = _a2.right, gap = _a2.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a2 = props.gapMode, gapMode = _a2 === void 0 ? "margin" : _a2;
  var gap = React49.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React49.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
init_react();
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
init_react();
var elementCouldBeVScrolled = function(node2) {
  var styles2 = window.getComputedStyle(node2);
  return styles2.overflowY !== "hidden" && !(styles2.overflowY === styles2.overflowX && styles2.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node2) {
  var styles2 = window.getComputedStyle(node2);
  return styles2.overflowX !== "hidden" && !(styles2.overflowY === styles2.overflowX && styles2.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node2) {
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a2 = getScrollVariables(axis, current), s = _a2[1], d = _a2[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a2) {
  var scrollTop = _a2.scrollTop, scrollHeight = _a2.scrollHeight, clientHeight = _a2.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a2) {
  var scrollLeft = _a2.scrollLeft, scrollWidth = _a2.scrollWidth, clientWidth = _a2.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a2 = getScrollVariables(axis, target), position = _a2[0], scroll_1 = _a2[1], capacity = _a2[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React50.useRef([]);
  var touchStartRef = React50.useRef([0, 0]);
  var activeAxis = React50.useRef();
  var id = React50.useState(idCounter++)[0];
  var Style2 = React50.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React50.useRef(props);
  React50.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React50.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React50.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React50.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React50.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React50.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React50.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React50.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React50.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React50.createElement(React50.Fragment, null, inert ? React50.createElement(Style2, { styles: generateStyle(id) }) : null, removeScrollBar ? React50.createElement(RemoveScrollBar, { gapMode: "margin" }) : null);
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React51.forwardRef(function(props, ref) {
  return React51.createElement(RemoveScroll, __assign6({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@reach/dialog/dist/reach-dialog.esm.js
var import_prop_types4 = __toESM(require_prop_types());
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["as", "isOpen"];
var _excluded2 = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"];
var _excluded3 = ["as", "onClick", "onKeyDown"];
var _excluded4 = ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"];
var overlayPropTypes = {
  allowPinchZoom: import_prop_types4.default.bool,
  dangerouslyBypassFocusLock: import_prop_types4.default.bool,
  dangerouslyBypassScrollLock: import_prop_types4.default.bool,
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  onDismiss: import_prop_types4.default.func
};
var DialogOverlay = /* @__PURE__ */ (0, import_react69.forwardRef)(function DialogOverlay2(_ref2, forwardedRef) {
  var _ref$as = _ref2.as, Comp = _ref$as === void 0 ? "div" : _ref$as, _ref$isOpen = _ref2.isOpen, isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen, props = _objectWithoutPropertiesLoose3(_ref2, _excluded);
  useCheckStyles("dialog");
  (0, import_react69.useEffect)(function() {
    if (isOpen) {
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function() {
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? /* @__PURE__ */ (0, import_react69.createElement)(Portal, {
    "data-reach-dialog-wrapper": ""
  }, /* @__PURE__ */ (0, import_react69.createElement)(DialogInner, _extends3({
    ref: forwardedRef,
    as: Comp
  }, props))) : null;
});
if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /* @__PURE__ */ _extends3({}, overlayPropTypes, {
    isOpen: import_prop_types4.default.bool
  });
}
var DialogInner = /* @__PURE__ */ (0, import_react69.forwardRef)(function DialogInner2(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom, _ref2$as = _ref2.as, Comp = _ref2$as === void 0 ? "div" : _ref2$as, _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock, dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa, _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock, dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2, initialFocusRef2 = _ref2.initialFocusRef, onClick = _ref2.onClick, _ref2$onDismiss = _ref2.onDismiss, onDismiss = _ref2$onDismiss === void 0 ? noop2 : _ref2$onDismiss, onKeyDown = _ref2.onKeyDown, onMouseDown = _ref2.onMouseDown, unstable_lockFocusAcrossFrames = _ref2.unstable_lockFocusAcrossFrames, props = _objectWithoutPropertiesLoose3(_ref2, _excluded2);
  var lockFocusAcrossFramesIsDefined = unstable_lockFocusAcrossFrames !== void 0;
  if (true) {
    (0, import_react69.useEffect)(function() {
      if (lockFocusAcrossFramesIsDefined) {
        console.warn("The unstable_lockFocusAcrossFrames in @reach/dialog is deprecated. It will be removed in the next minor release.");
      }
    }, [lockFocusAcrossFramesIsDefined]);
  }
  var mouseDownTarget = (0, import_react69.useRef)(null);
  var overlayNode = (0, import_react69.useRef)(null);
  var ref = useComposedRefs(overlayNode, forwardedRef);
  var activateFocusLock = (0, import_react69.useCallback)(function() {
    if (initialFocusRef2 && initialFocusRef2.current) {
      initialFocusRef2.current.focus();
    }
  }, [initialFocusRef2]);
  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }
  (0, import_react69.useEffect)(function() {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void 0;
  }, []);
  return /* @__PURE__ */ (0, import_react69.createElement)(es2015_default2, {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames != null ? unstable_lockFocusAcrossFrames : true
  }, /* @__PURE__ */ (0, import_react69.createElement)(Combination_default2, {
    allowPinchZoom,
    enabled: !dangerouslyBypassScrollLock
  }, /* @__PURE__ */ (0, import_react69.createElement)(Comp, _extends3({}, props, {
    ref,
    "data-reach-dialog-overlay": "",
    onClick: composeEventHandlers(onClick, handleClick),
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown)
  }))));
});
if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /* @__PURE__ */ _extends3({}, overlayPropTypes);
}
var DialogContent = /* @__PURE__ */ (0, import_react69.forwardRef)(function DialogContent2(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as, Comp = _ref3$as === void 0 ? "div" : _ref3$as, onClick = _ref3.onClick;
  _ref3.onKeyDown;
  var props = _objectWithoutPropertiesLoose3(_ref3, _excluded3);
  return /* @__PURE__ */ (0, import_react69.createElement)(Comp, _extends3({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: composeEventHandlers(onClick, function(event) {
      event.stopPropagation();
    })
  }));
});
if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}
var Dialog = /* @__PURE__ */ (0, import_react69.forwardRef)(function Dialog2(_ref4, forwardedRef) {
  var _ref4$allowPinchZoom = _ref4.allowPinchZoom, allowPinchZoom = _ref4$allowPinchZoom === void 0 ? false : _ref4$allowPinchZoom, initialFocusRef2 = _ref4.initialFocusRef, isOpen = _ref4.isOpen, _ref4$onDismiss = _ref4.onDismiss, onDismiss = _ref4$onDismiss === void 0 ? noop2 : _ref4$onDismiss, props = _objectWithoutPropertiesLoose3(_ref4, _excluded4);
  return /* @__PURE__ */ (0, import_react69.createElement)(DialogOverlay, {
    allowPinchZoom,
    initialFocusRef: initialFocusRef2,
    isOpen,
    onDismiss
  }, /* @__PURE__ */ (0, import_react69.createElement)(DialogContent, _extends3({
    ref: forwardedRef
  }, props)));
});
if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: import_prop_types4.default.bool,
    onDismiss: import_prop_types4.default.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}
function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = getOwnerDocument(dialogNode);
  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }
    return noop2;
  }
  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function(node2) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;
    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) == null ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) == null ? void 0 : _dialogNode$parentNod2.parentNode;
    if (node2 === portalNode) {
      return;
    }
    var attr = node2.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";
    if (alreadyHidden) {
      return;
    }
    originalValues.push(attr);
    rootNodes.push(node2);
    node2.setAttribute("aria-hidden", "true");
  });
  return function() {
    rootNodes.forEach(function(node2, index4) {
      var originalValue = originalValues[index4];
      if (originalValue === null) {
        node2.removeAttribute("aria-hidden");
      } else {
        node2.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}
function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";
  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }
  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !isString4(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }
  return null;
}

// app/old-app/pages/care-ministry.js
function CareMinistry() {
  const [pageData, setPageData] = (0, import_react70.useState)();
  const [showDialog, setShowDialog] = import_react70.default.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react70.useState)(true);
  const query = `*[_type == "page" && title == "Care Ministries"]{
    paragraphs,
    faq,
    scripture
  }`;
  (0, import_react70.useEffect)(() => {
    sanity.fetch(query).then((results) => {
      setPageData(results[0]);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react70.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react70.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react70.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react70.default.createElement("li", null, props.children)
    }
  };
  return /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "care-ministries"
  }, /* @__PURE__ */ import_react70.default.createElement("h1", null, "Care Ministry"), /* @__PURE__ */ import_react70.default.createElement("iframe", {
    title: "Care Ministries",
    src: "https://player.vimeo.com/video/508963469?color=ffffff&title=0&byline=0&portrait=0",
    width: "640",
    height: "360",
    frameBorder: "0",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true
  }), pageDataIsLoading ? /* @__PURE__ */ import_react70.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react70.default.createElement(import_react70.default.Fragment, null, /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "care-ministries-row"
  }, /* @__PURE__ */ import_react70.default.createElement(import_block_content_to_react9.default, {
    className: "care-ministries-row-vision",
    blocks: pageData.paragraphs[0].bodyText,
    serializers,
    renderContainerOnSingleChild: true
  }), /* @__PURE__ */ import_react70.default.createElement(ScriptureVerse, {
    verse: pageData.scripture.verseText,
    reference: pageData.scripture.reference
  })), /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "care-ministries-row"
  }, /* @__PURE__ */ import_react70.default.createElement("span", null, /* @__PURE__ */ import_react70.default.createElement("h3", null, "Help for the Hurting"), /* @__PURE__ */ import_react70.default.createElement("p", null, "1-5 sessions")), /* @__PURE__ */ import_react70.default.createElement(import_block_content_to_react9.default, {
    blocks: pageData.paragraphs[1].bodyText,
    serializers,
    renderContainerOnSingleChild: true
  })), /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "care-ministries-row"
  }, /* @__PURE__ */ import_react70.default.createElement("span", null, /* @__PURE__ */ import_react70.default.createElement("h3", null, "Biblical Counseling"), /* @__PURE__ */ import_react70.default.createElement("p", null, "Up to 10 sessions")), /* @__PURE__ */ import_react70.default.createElement(import_block_content_to_react9.default, {
    blocks: pageData.paragraphs[2].bodyText,
    serializers,
    renderContainerOnSingleChild: true
  })), /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "care-ministries-row"
  }, /* @__PURE__ */ import_react70.default.createElement("span", null, /* @__PURE__ */ import_react70.default.createElement("h3", null, "Care and Recovery Groups"), /* @__PURE__ */ import_react70.default.createElement("p", null, "Typically 13 Weeks")), /* @__PURE__ */ import_react70.default.createElement(import_block_content_to_react9.default, {
    blocks: pageData.paragraphs[3].bodyText,
    serializers,
    renderContainerOnSingleChild: true
  }))), /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "contact-container"
  }, /* @__PURE__ */ import_react70.default.createElement("h3", null, "If you have a question or you're interested in talking with someone, please contact us.", " "), /* @__PURE__ */ import_react70.default.createElement(button_default, {
    size: "large",
    color: "gold",
    buttonFunc: open,
    title: "Contact"
  })), /* @__PURE__ */ import_react70.default.createElement(DialogOverlay, {
    isOpen: showDialog,
    onDismiss: close
  }, /* @__PURE__ */ import_react70.default.createElement(DialogContent, {
    style: {
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /* @__PURE__ */ import_react70.default.createElement("button", {
    className: "close-button",
    onClick: close
  }, /* @__PURE__ */ import_react70.default.createElement("span", {
    role: "img",
    "aria-label": "Close Contact Form"
  }, "\u274C")), /* @__PURE__ */ import_react70.default.createElement(CareMinistryForm, {
    closeFunc: close
  }))), /* @__PURE__ */ import_react70.default.createElement("h3", null, "FAQ"), /* @__PURE__ */ import_react70.default.createElement(FrequentlyAskedQuestions, {
    layout: "vertical",
    faq: pageData?.faq.faqs
  }));
}

// app/old-app/pages/whats-happening.js
init_react();
var import_react72 = __toESM(require_react());
var import_block_content_to_react10 = __toESM(require_BlockContent());

// node_modules/date-fns/esm/index.js
init_react();

// node_modules/date-fns/esm/_lib/toInteger/index.js
init_react();
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number3 = Number(dirtyNumber);
  if (isNaN(number3)) {
    return number3;
  }
  return number3 < 0 ? Math.ceil(number3) : Math.floor(number3);
}

// node_modules/date-fns/esm/toDate/index.js
init_react();

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
init_react();
function requiredArgs(required2, args) {
  if (args.length < required2) {
    throw new TypeError(required2 + " argument" + (required2 > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

// node_modules/date-fns/esm/addMilliseconds/index.js
init_react();
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
init_react();
function getTimezoneOffsetInMilliseconds(date2) {
  var utcDate = new Date(Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes(), date2.getSeconds(), date2.getMilliseconds()));
  utcDate.setUTCFullYear(date2.getFullYear());
  return date2.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/isValid/index.js
init_react();

// node_modules/date-fns/esm/isDate/index.js
init_react();
function isDate3(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid2(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate3(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date2 = toDate(dirtyDate);
  return !isNaN(Number(date2));
}

// node_modules/date-fns/esm/format/index.js
init_react();

// node_modules/date-fns/esm/locale/en-US/index.js
init_react();

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
init_react();
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
init_react();

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
init_react();
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
init_react();
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
init_react();

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
init_react();
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index4 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index4];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function(dirtyNumber, _options) {
  var number3 = Number(dirtyNumber);
  var rem100 = number3 % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number3 + "st";
      case 2:
        return number3 + "nd";
      case 3:
        return number3 + "rd";
    }
  }
  return number3 + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
init_react();

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
init_react();
function buildMatchFn(args) {
  return function(string3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string3.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex2(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string3.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object3, predicate) {
  for (var key in object3) {
    if (object3.hasOwnProperty(key) && predicate(object3[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex2(array2, predicate) {
  for (var key = 0; key < array2.length; key++) {
    if (predicate(array2[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
init_react();
function buildMatchPatternFn(args) {
  return function(string3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string3.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string3.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string3.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index4) {
      return index4 + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/subMilliseconds/index.js
init_react();
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/format/formatters/index.js
init_react();

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
init_react();
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var timestamp = date2.getTime();
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date2.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
init_react();

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
init_react();
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date2 = toDate(dirtyDate);
  var day = date2.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date2.setUTCDate(date2.getUTCDate() - diff);
  date2.setUTCHours(0, 0, 0, 0);
  return date2;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
init_react();

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
init_react();
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var year = date2.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date2.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date2.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date2 = startOfUTCISOWeek(fourthOfJanuary);
  return date2;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date2).getTime() - startOfUTCISOWeekYear(date2).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
init_react();

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
init_react();
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date2 = toDate(dirtyDate);
  var day = date2.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date2.setUTCDate(date2.getUTCDate() - diff);
  date2.setUTCHours(0, 0, 0, 0);
  return date2;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
init_react();

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
init_react();
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var year = date2.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
  if (date2.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date2.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date2 = startOfUTCWeek(firstWeek, dirtyOptions);
  return date2;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date2 = toDate(dirtyDate);
  var diff = startOfUTCWeek(date2, options).getTime() - startOfUTCWeekYear(date2, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
init_react();
function addLeadingZeros(number3, targetLength) {
  var sign = number3 < 0 ? "-" : "";
  var output = Math.abs(number3).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
init_react();
var formatters = {
  y: function(date2, token) {
    var signedYear = date2.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function(date2, token) {
    var month = date2.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function(date2, token) {
    return addLeadingZeros(date2.getUTCDate(), token.length);
  },
  a: function(date2, token) {
    var dayPeriodEnumValue = date2.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(date2, token) {
    return addLeadingZeros(date2.getUTCHours() % 12 || 12, token.length);
  },
  H: function(date2, token) {
    return addLeadingZeros(date2.getUTCHours(), token.length);
  },
  m: function(date2, token) {
    return addLeadingZeros(date2.getUTCMinutes(), token.length);
  },
  s: function(date2, token) {
    return addLeadingZeros(date2.getUTCSeconds(), token.length);
  },
  S: function(date2, token) {
    var numberOfDigits = token.length;
    var milliseconds = date2.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  G: function(date2, token, localize2) {
    var era = date2.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  y: function(date2, token, localize2) {
    if (token === "yo") {
      var signedYear = date2.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date2, token);
  },
  Y: function(date2, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date2, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function(date2, token) {
    var isoWeekYear = getUTCISOWeekYear(date2);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function(date2, token) {
    var year = date2.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function(date2, token, localize2) {
    var quarter = Math.ceil((date2.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(date2, token, localize2) {
    var quarter = Math.ceil((date2.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(date2, token, localize2) {
    var month = date2.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date2, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(date2, token, localize2) {
    var month = date2.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(date2, token, localize2, options) {
    var week = getUTCWeek(date2, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function(date2, token, localize2) {
    var isoWeek = getUTCISOWeek(date2);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function(date2, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date2.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date2, token);
  },
  D: function(date2, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date2);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function(date2, token, localize2) {
    var dayOfWeek = date2.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(date2, token, localize2, options) {
    var dayOfWeek = date2.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(date2, token, localize2, options) {
    var dayOfWeek = date2.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(date2, token, localize2) {
    var dayOfWeek = date2.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(date2, token, localize2) {
    var hours = date2.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(date2, token, localize2) {
    var hours = date2.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(date2, token, localize2) {
    var hours = date2.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(date2, token, localize2) {
    if (token === "ho") {
      var hours = date2.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date2, token);
  },
  H: function(date2, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date2.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date2, token);
  },
  K: function(date2, token, localize2) {
    var hours = date2.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function(date2, token, localize2) {
    var hours = date2.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function(date2, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date2.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date2, token);
  },
  s: function(date2, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date2.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date2, token);
  },
  S: function(date2, token) {
    return lightFormatters_default.S(date2, token);
  },
  X: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function(date2, token, _localize, options) {
    var originalDate = options._originalDate || date2;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset2, dirtyDelimiter) {
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset2, dirtyDelimiter) {
  if (offset2 % 60 === 0) {
    var sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, dirtyDelimiter);
}
function formatTimezone(offset2, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
init_react();
function dateLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
}
function timeLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
}
function dateTimeLongFormatter(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
init_react();
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale2 = options.locale || en_US_default;
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid2(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong, formatterOptions);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

// app/old-app/components/upcoming-events.js
init_react();
var import_axios = __toESM(require_axios());
var import_react71 = __toESM(require_react());
function UpcomingEvents(props) {
  const [events, setEvents] = (0, import_react71.useState)();
  (0, import_react71.useEffect)(() => {
    const options = {
      method: "GET",
      auth: {
        username: process.env.REACT_APP_PLANNING_CENTER_APPID,
        password: process.env.REACT_APP_PLANNING_CENTER_SECRET
      }
    };
    import_axios.default.get(`https://api.planningcenteronline.com/registrations/v2/events?filter=published`, options).then((response) => {
      console.log(response);
      setEvents(response.data);
    });
  });
  return /* @__PURE__ */ import_react71.default.createElement("div", null, events?.map((event) => /* @__PURE__ */ import_react71.default.createElement("div", {
    onClick: () => window.open(`${event.public_url}`)
  }, /* @__PURE__ */ import_react71.default.createElement("img", {
    src: event.logo_url,
    alt: ""
  }), /* @__PURE__ */ import_react71.default.createElement("h3", null, event.name))));
}

// app/old-app/pages/whats-happening.js
function WhatsHappening() {
  const [announcement, setAnnouncement] = (0, import_react72.useState)();
  const [noAnnouncement, setNoAnnouncement] = (0, import_react72.useState)(false);
  const [isAnnouncementLoading, setIsAnnouncementLoading] = (0, import_react72.useState)(true);
  const [pageData, setPageData] = (0, import_react72.useState)();
  const [isFaqLoading, setIsFaqLoading] = (0, import_react72.useState)(true);
  const announcementQuery = `*[_type == "biWeeklyAnnouncements" ] | order(_createdAt desc) [0] `;
  const query = `*[_type == "page" && title == "About Page"]{...}`;
  (0, import_react72.useEffect)(() => {
    sanity.fetch(announcementQuery).then((response) => {
      if (response === null) {
        setNoAnnouncement(true);
        setIsAnnouncementLoading(false);
      } else {
        setAnnouncement(response);
        setIsAnnouncementLoading(false);
      }
    }).catch(() => {
      setNoAnnouncement(true);
    });
    sanity.fetch(query).then((response) => {
      setPageData(response[0]);
      setIsFaqLoading(false);
    });
  }, []);
  return /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements"
  }, noAnnouncement ? /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement("p", null, "Looks like there's no announcements."), /* @__PURE__ */ import_react72.default.createElement("p", null, "Please try again later. In the meantime, check out our FAQs below.")) : isAnnouncementLoading ? /* @__PURE__ */ import_react72.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement("h5", null, format(new Date(announcement._createdAt), "PPP")), /* @__PURE__ */ import_react72.default.createElement("h1", null, "VBVF Announcements"), /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements-video"
  }, /* @__PURE__ */ import_react72.default.createElement("iframe", {
    allowFullScreen: true,
    title: announcement._id,
    src: `https://player.vimeo.com/video/${announcement.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`
  })), /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements-text"
  }, /* @__PURE__ */ import_react72.default.createElement(import_block_content_to_react10.default, {
    blocks: announcement?.text
  }))), /* @__PURE__ */ import_react72.default.createElement(UpcomingEvents, null), /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements-service-times"
  }, /* @__PURE__ */ import_react72.default.createElement("h2", null, "Service times"), /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements-service-times-info"
  }, /* @__PURE__ */ import_react72.default.createElement("div", null, /* @__PURE__ */ import_react72.default.createElement("h3", null, "Tuesday"), /* @__PURE__ */ import_react72.default.createElement("p", null, "Women's Bible Study ", /* @__PURE__ */ import_react72.default.createElement("br", null), " 10:00am - Sanctuary ", /* @__PURE__ */ import_react72.default.createElement("br", null))), /* @__PURE__ */ import_react72.default.createElement("div", null, /* @__PURE__ */ import_react72.default.createElement("h3", null, "Wednesday"), /* @__PURE__ */ import_react72.default.createElement("p", null, "Mid-week Bible Study ", /* @__PURE__ */ import_react72.default.createElement("br", null), " 7:00pm - Sanctuary ", /* @__PURE__ */ import_react72.default.createElement("br", null))), /* @__PURE__ */ import_react72.default.createElement("div", null, /* @__PURE__ */ import_react72.default.createElement("h3", null, "Sunday"), /* @__PURE__ */ import_react72.default.createElement("p", null, "Worship Service ", /* @__PURE__ */ import_react72.default.createElement("br", null), "9:00am & 11:00am - Sanctuary ", /* @__PURE__ */ import_react72.default.createElement("br", null))))), isFaqLoading ? /* @__PURE__ */ import_react72.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "announcements-faq"
  }, /* @__PURE__ */ import_react72.default.createElement("h2", null, "General FAQs"), /* @__PURE__ */ import_react72.default.createElement(FrequentlyAskedQuestions, {
    faq: pageData.faq.faqs.slice(0, 4),
    layout: "compact"
  })));
}

// app/old-app/App.js
function App() {
  return /* @__PURE__ */ import_react73.default.createElement("div", {
    className: "page-container"
  }, /* @__PURE__ */ import_react73.default.createElement(ScrollToTop, null), /* @__PURE__ */ import_react73.default.createElement(global_nav_default, null), /* @__PURE__ */ import_react73.default.createElement(Routes, null, /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/connect",
    element: /* @__PURE__ */ import_react73.default.createElement(connect_page_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/about/faq",
    element: /* @__PURE__ */ import_react73.default.createElement(FAQ, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/about/leadership",
    element: /* @__PURE__ */ import_react73.default.createElement(Leadership, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/about/our-story",
    element: /* @__PURE__ */ import_react73.default.createElement(OurStory, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/giving",
    element: /* @__PURE__ */ import_react73.default.createElement(giving_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/about/beliefs",
    element: /* @__PURE__ */ import_react73.default.createElement(Beliefs, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/contact",
    element: /* @__PURE__ */ import_react73.default.createElement(contact_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/livestream",
    element: /* @__PURE__ */ import_react73.default.createElement(Livestream, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "bible-studies",
    element: /* @__PURE__ */ import_react73.default.createElement(StudyAggregator, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "bible-studies/:studyName",
    element: /* @__PURE__ */ import_react73.default.createElement(StudyPage, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/sermon-redirect",
    element: /* @__PURE__ */ import_react73.default.createElement(sermon_redirect_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/giving-redirect",
    element: /* @__PURE__ */ import_react73.default.createElement(giving_redirect_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/registration-redirect",
    element: /* @__PURE__ */ import_react73.default.createElement(registration_redirect_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/privacy-policy",
    element: /* @__PURE__ */ import_react73.default.createElement(privacy_policy_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/terms-and-conditions",
    element: /* @__PURE__ */ import_react73.default.createElement(terms_conditions_default, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/ministries/youth-ministry",
    element: /* @__PURE__ */ import_react73.default.createElement(YouthMinistry, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/ministries/childrens-ministry",
    element: /* @__PURE__ */ import_react73.default.createElement(ChildrensMinistry, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "childrens-content",
    element: /* @__PURE__ */ import_react73.default.createElement(ChildrensContentAggregator, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "childrens-content/:unitId",
    element: /* @__PURE__ */ import_react73.default.createElement(ChildrensUnitPage, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/ministries/small-groups",
    element: /* @__PURE__ */ import_react73.default.createElement(SmallGroups, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/ministries/serve",
    element: /* @__PURE__ */ import_react73.default.createElement(Serve, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/ministries/care-ministry",
    element: /* @__PURE__ */ import_react73.default.createElement(CareMinistry, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/attend",
    element: /* @__PURE__ */ import_react73.default.createElement(AttendService, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/announcement/:announcementId",
    element: /* @__PURE__ */ import_react73.default.createElement(Announcement, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "/announcements",
    element: /* @__PURE__ */ import_react73.default.createElement(WhatsHappening, null)
  }), /* @__PURE__ */ import_react73.default.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ import_react73.default.createElement(notfound_default, null)
  })), /* @__PURE__ */ import_react73.default.createElement(footer_default, null), /* @__PURE__ */ import_react73.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Vollkorn|Work+Sans&display=swap",
    rel: "stylesheet"
  }));
}
var App_default = App;
export {
  App_default as default
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//# sourceMappingURL=/build/routes/$-L3LC5MWA.js.map
