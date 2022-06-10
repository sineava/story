import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import PizZipUtils from 'pizzip/utils/index'
import { saveAs } from 'file-saver'
import ImageModule from 'docxtemplater-image-module-free'

/**
 * @desc 导出表格带图片
 */
export const renderDoc = ({ list, url }: { list: any[], url: string }) => {
  console.log(list, url)
  const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  PizZipUtils.getBinaryContent(url, (error: any, content: any) => {
    if (error) throw error
    const zip = new PizZip(content)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      modules: [
        new ImageModule({
          centered: false,
          getImage: (tagValue: any) => {
            return new Promise((resolve, reject) => {
              PizZipUtils.getBinaryContent(tagValue, (error: any, content: any) =>
                error ? reject(error) : resolve(content)
              )
            })
          },
          getSize: () => [150, 150]
        })
      ]
    })
    doc.renderAsync({ list }).then(() => {
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType
      })
      saveAs(out, '导出.docx')
    })
  })
}