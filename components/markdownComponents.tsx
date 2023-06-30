const components = {
    h1: (props) => <h1 style={{ fontSize: '2em', borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em' }} {...props} />,
    h2: (props) => <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em' }} {...props} />,
    h3: (props) => <h3 style={{ fontSize: '1.2em', paddingTop: '0.8em', paddingBottom: '0.3em' }} {...props} />,
    ul: (props) => <ul style={{ listStyleType: 'disc', paddingLeft: '2em', paddingTop: '0.3em', paddingBottom: '0.3em' }} {...props} />,
    ol: (props) => <ol style={{ listStyleType: 'decimal', paddingLeft: '2em', paddingTop: '0.3em', paddingBottom: '0.3em' }} {...props} />,
    li: (props) => <li {...props} />,
    em: (props) => <em {...props} />,
    strong: (props) => <strong {...props} />,
    del: (props) => <del {...props} />,
    a: (props) => <a style={{ color: 'grey', textDecoration: 'underline' }} {...props} />,
    table: (props) => <table style={{ borderCollapse: 'collapse', width: '100%' }} {...props} />,
    thead: (props) => <thead {...props} />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr {...props} />,
    th: (props) => <th style={{ border: '1px solid #dfe2e5', padding: '6px 13px' }} {...props} />,
    td: (props) => <td style={{ border: '1px solid #dfe2e5', padding: '6px 13px' }} {...props} />,
    blockquote: ({ children }) => (
      <blockquote style={{ color: '#6a737d', borderLeft: '0.25em solid #dfe2e5', padding: '0 1em' }}>{children}</blockquote>
    ),
    hr: () => <hr />,
  };
  
  export default components;
  