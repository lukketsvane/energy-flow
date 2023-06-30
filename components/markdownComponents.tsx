import React from 'react';

const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ fontSize: '2em', borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em' }} {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em' }} {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 style={{ fontSize: '1.2em', paddingTop: '0.8em', paddingBottom: '0.3em' }} {...props} />,
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul style={{ listStyleType: 'disc', paddingLeft: '2em', paddingTop: '0.3em', paddingBottom: '0.3em' }} {...props} />,
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol style={{ listStyleType: 'decimal', paddingLeft: '2em', paddingTop: '0.3em', paddingBottom: '0.3em' }} {...props} />,
    li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
    em: (props: React.HTMLAttributes<HTMLElement>) => <em {...props} />,
    strong: (props: React.HTMLAttributes<HTMLElement>) => <strong {...props} />,
    del: (props: React.HTMLAttributes<HTMLElement>) => <del {...props} />,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a style={{ color: 'grey', textDecoration: 'underline' }} {...props} />,
    table: (props: React.HTMLAttributes<HTMLTableElement>) => <table style={{ borderCollapse: 'collapse', width: '100%' }} {...props} />,
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <thead {...props} />,
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />,
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />,
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => <th style={{ border: '1px solid #dfe2e5', padding: '6px 13px' }} {...props} />,
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => <td style={{ border: '1px solid #dfe2e5', padding: '6px 13px' }} {...props} />,
    blockquote: ({ children }: React.PropsWithChildren<{}>) => (
      <blockquote style={{ color: '#6a737d', borderLeft: '0.25em solid #dfe2e5', padding: '0 1em' }}>{children}</blockquote>
    ),
    hr: () => <hr />,
};

export default components;
