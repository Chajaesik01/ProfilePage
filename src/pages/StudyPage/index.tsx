import { colors } from '@/styles';
import styled from 'styled-components';
import { studyItem } from '@/mock';
import { handleMove, isEmpty } from '@/utils/utils';
import { StudyItem } from '@/types/types';

type TableCellProps = {
  $isEmpty: boolean;
};

const StudyPage = () => {
  return (
    <S.StudyContainer>
      <S.StudyWrapper>
        <h2>내용은 지속적으로 업데이트됩니다</h2>
        <S.StudyTable>
          <thead>
            <tr>
              <th>Index</th>
              <th>주제</th>
              <th>GitHub 링크</th>
              <th>블로그 링크</th>
            </tr>
          </thead>
          <tbody>
            {studyItem.map((item: StudyItem) => (
              <tr key={item.index}>
                <td>{item.index}</td>
                <td>{item.topic}</td>
                <S.TableCell
                  $isEmpty={isEmpty(item.github_link)}
                  onClick={() =>
                    !isEmpty(item.github_link) && handleMove(item.github_link)
                  }
                >
                  {isEmpty(item.github_link) ? '' : '클릭'}
                </S.TableCell>
                <S.TableCell
                  $isEmpty={isEmpty(item.blog_link)}
                  onClick={() =>
                    !isEmpty(item.blog_link) && handleMove(item.blog_link)
                  }
                >
                  {isEmpty(item.blog_link) ? '' : '클릭'}
                </S.TableCell>
              </tr>
            ))}
          </tbody>
        </S.StudyTable>
      </S.StudyWrapper>
    </S.StudyContainer>
  );
};

const S = {
  StudyContainer: styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  StudyWrapper: styled.div`
    width: 70%;
    height: 70%;

    h2 {
      font-size: 24px;
      margin-bottom: 4vh;
    }
  `,

  StudyTable: styled.table`
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid ${colors.semantic.border.light};
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: ${colors.semantic.background.gray};
    }
  `,

  TableCell: styled.td<TableCellProps>`
    cursor: ${({ $isEmpty }) => ($isEmpty ? 'default' : 'pointer')};

    &:hover {
      color: ${colors.semantic.hover.info};
    }
  `,
};

export default StudyPage;
