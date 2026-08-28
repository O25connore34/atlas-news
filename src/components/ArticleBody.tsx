import type { Block } from '../types.ts'

type Props = {
  body: Block[]
}

export function ArticleBody({ body }: Props) {
  return (
    <div className="prose">
      {body.map((block, index) => {
        if (block.type === 'p') {
          return <p key={index}>{block.text}</p>
        }
        if (block.type === 'h') {
          return <h2 key={index}>{block.text}</h2>
        }
        if (block.type === 'quote') {
          return (
            <blockquote key={index}>
              <p>{block.text}</p>
              <footer>{block.cite}</footer>
            </blockquote>
          )
        }
        return (
          <table key={index} className="facts">
            <tbody>
              {block.items.map((item) => (
                <tr key={item.label}>
                  <th scope="row">{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      })}
    </div>
  )
}
