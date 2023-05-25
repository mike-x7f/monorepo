import { Fragment } from "react"
import Highlight, { Language, defaultProps } from "prism-react-renderer"

export function Fence({
  children,
  language,
}: {
  children: string
  language: Language
}) {
  return (
    // @ts-expect-error
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {"\n"}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default {
  render: Fence,
  attributes: {
    language: {
      type: String,
    },
  },
}
