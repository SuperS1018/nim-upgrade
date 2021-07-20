const CMS = window.CMS

export const CMSExt = () => {
  // Slack Command
  CMS.registerEditorComponent({
    id: 'slack-command',
    label: 'Slack Command',
    fields: [
      {name: 'role', label: 'Role', widget: 'select', options: ['user', 'admin'], default: ['user']},
      {name: 'message', label: 'Message', widget: 'markdown'}
    ],
    pattern: /^>\s(#####+)\s(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      // console.log('match', match)
      return {
        role: match[1],
        message: match[2]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      // console.log('obj', obj)
      const { role, message } = obj
      return `> #####${role === 'admin' ? '#' : ''} ${message}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      // console.log('preview', obj)
      return (
        '<code>' + obj.message + '</code>'
      )
    }
  })

  // Commander Commands
  CMS.registerEditorComponent({
    id: 'commander-commands',
    label: 'Commander Commands',
    fields: [
      {name: 'role', label: 'Role', widget: 'select', options: ['user', 'admin'], default: 'user'},
      {name: 'indent', label: 'Indent', widget: 'select', options: ['0', '1', '2', '3'], default: '0'},
      {name: 'message', label: 'Message', widget: 'markdown'}
    ],
    pattern: /^CMS-COMMANDERCOMMANDS ROLE=(.*) INDENT=(.*) MESSAGE=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        role: match[1],
        indent: match[2],
        message: match[3]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-COMMANDERCOMMANDS ROLE=${obj.role || 'user'} INDENT=${obj.indent || '0'} MESSAGE=${obj.message || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-COMMANDERCOMMANDS ROLE=${obj.role} INDENT=${obj.indent || '0'} MESSAGE=${obj.message}`
      )
    }
  })

  // Image with class
  CMS.registerEditorComponent({
    id: 'image-class',
    label: 'Image Class',
    fields: [
      {name: 'image', label: 'Image', widget: 'image', required: true },
      {name: 'indent', label: 'Indent', widget: 'select', options: ['0', '1', '2', '3'], default: '0', required: true},
      {name: 'class', label: 'Class Name', widget: 'string'},
      {name: 'alt', label: 'Alt', widget: 'string'}
    ],
    pattern: /^CMS-IMAGECLASS IMAGE=(.*) INDENT=(.*) CLASS=(.*) ALT=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        image: match[1],
        indent: match[2],
        class: match[3],
        alt: match[4]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-IMAGECLASS IMAGE=${obj.image} INDENT=${obj.indent || '0'} CLASS=${obj.class} ALT=${obj.alt || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-IMAGECLASS IMAGE=${obj.image} INDENT=${obj.indent} CLASS=${obj.class} ALT=${obj.alt}`
      )
    }
  })

  // Anchor
  CMS.registerEditorComponent({
    id: 'anchor',
    label: 'Anchor',
    fields: [
      {name: 'id', label: 'Unique Id', widget: 'string'}
    ],
    pattern: /^CMS-ANCHOR ID=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        id: match[1]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-ANCHOR ID=${obj.id || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-ANCHOR ID=${obj.id || ''}`
      )
    }
  })

  // Podcast
  CMS.registerEditorComponent({
    id: 'podcast',
    label: 'Podcast',
    fields: [
      {name: 'indent', label: 'Indent', widget: 'select', options: ['0', '1', '2', '3'], default: '0', required: true},
      {name: 'width', label: 'Width', widget: 'select', options: ['100', '75', '50', '25'], default: '100'},
      {name: 'src', label: 'Audio (*.mp3)', widget: 'file', required: true},
      {name: 'art', label: 'Image', widget: 'image', required: true},
      {name: 'title', label: 'Title', widget: 'string', required: true}
    ],
    pattern: /^CMS-PODCAST INDENT=(.*) WIDTH=(.*) SRC=(.*) ART=(.*) TITLE=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        indent: match[1],
        width: match[2],
        src: match[3],
        art: match[4],
        title: match[5]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-PODCAST INDENT=${obj.indent || '0'} WIDTH=${obj.width || '100'} SRC=${obj.src || ''} ART=${obj.art || ''} TITLE=${obj.title || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-PODCAST INDENT=${obj.indent || '0'} WIDTH=${obj.width || '100'} SRC=${obj.src || ''} ART=${obj.art || ''} TITLE=${obj.title || ''}`
      )
    }
  })

  // Indent
  CMS.registerEditorComponent({
    id: 'indent',
    label: 'Indent',
    fields: [
      {name: 'indent', label: 'Indent', widget: 'select', options: ['0', '1', '2', '3'], default: '0', required: true},
      {name: 'content', label: 'Content', widget: 'markdown'}
    ],
    pattern: /^CMS-INDENT INDENT=(.*) CONTENT=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        indent: match[1],
        content: match[2]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-INDENT INDENT=${obj.indent || '0'} CONTENT=${obj.content || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-INDENT INDENT=${obj.indent || '0'} CONTENT=${obj.content || ''}`
      )
    }
  })

  // caption
  CMS.registerEditorComponent({
    id: 'caption',
    label: 'Caption',
    fields: [
      {name: 'align', label: 'Align', widget: 'select', options: ['left', 'center'], default: 'left', required: true},
      {name: 'content', label: 'Content', widget: 'markdown'}
    ],
    pattern: /^CMS-CAPTION ALIGN=(.*) CONTENT=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        align: match[1],
        content: match[2]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-CAPTION ALIGN=${obj.align || '0'} CONTENT=${obj.content || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-CAPTION ALIGN=${obj.align || '0'} CONTENT=${obj.content || ''}`
      )
    }
  })

  // PDF
  CMS.registerEditorComponent({
    id: 'pdf-widget',
    label: 'PDF',
    fields: [
      {name: 'src', label: 'File Source (.pdf)', widget: 'file', required: true},
    ],
    pattern: /^CMS-PDF SRC=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        src: match[1],
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-PDF SRC=${obj.src || ''}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-PDF SRC=${obj.src || ''}`
      )
    }
  })

  // Animated Gif
  CMS.registerEditorComponent({
    id: 'animated-gif',
    label: 'Animated Gif',
    fields: [
      {name: 'image', label: 'Image', widget: 'image'},
      {name: 'indent', label: 'Indent', widget: 'select', options: ['0', '1', '2', '3'], default: '0'},
      {name: 'width', label: 'Width', widget: 'select', options: ['100', '75', '50', '25'], default: '100'}
    ],
    pattern: /^CMS-ANIMATEDGIF IMAGE=(.*) INDENT=(.*) WIDTH=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        image: match[1],
        indent: match[2],
        width: match[3]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-ANIMATEDGIF IMAGE=${obj.image} INDENT=${obj.indent || '0'} WIDTH=${obj.width || '100'}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-ANIMATEDGIF IMAGE=${obj.image} INDENT=${obj.indent} WIDTH=${obj.width}`
      )
    }
  })

  // Youtube
  CMS.registerEditorComponent({
    id: 'youtube',
    label: 'YouTube',
    fields: [
      {name: 'id', label: 'Id', widget: 'string'},
      {name: 'align', label: 'Align', widget: 'select', options: ['center', 'left'], default: 'center'},
      {name: 'width', label: 'Width', widget: 'select', options: ['100', '75', '50', '25'], default: '100'}
    ],
    pattern: /^CMS-YOUTUBE ID=(.*) ALIGN=(.*) WIDTH=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        id: match[1],
        align: match[2],
        width: match[3]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-YOUTUBE ID=${obj.id} ALIGN=${obj.align || 'center'} WIDTH=${obj.width || '100'}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-YOUTUBE ID=${obj.id} ALIGN=${obj.align} WIDTH=${obj.width}`
      )
    }
  })

  // Twitter Embed
  CMS.registerEditorComponent({
    id: 'twitter-embed',
    label: 'Twitter Embed',
    fields: [
      {name: 'id', label: 'Twitter ID', widget: 'string'},
      {name: 'align', label: 'Align', widget: 'select', options: ['left', 'center', 'right'], default: 'center'},
      {name: 'cards', label: 'Show Cards', widget: 'select', options: ['show', 'hidden'], default: 'show'}
    ],
    pattern: /^CMS-TWITTEREMBED ID=(.*) ALIGN=(.*) CARDS=(.*)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      return {
        id: match[1],
        align: match[2],
        cards: match[3]
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function (obj) {
      return `CMS-TWITTEREMBED ID=${obj.id || ''} ALIGN=${obj.align || 'center'} CARDS=${obj.cards || 'show'}`
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function (obj) {
      return (
        `CMS-TWITTEREMBED ID=${obj.id} ALIGN=${obj.align} CARDS=${obj.cards}`
      )
    }
  })
}

export default CMSExt
