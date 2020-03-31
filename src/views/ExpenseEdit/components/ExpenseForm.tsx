import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../../utils/theme';
import history from '../../../utils/history';
import { Expense } from '../../../api/types';
import withContainer from '../../viewHelpers/withContainer';
import Button from '../../../components/Button';
import TextArea from '../../../components/formElements/TextArea';
import FileUpload from '../../../components/formElements/FileUpload';
import { addComment } from '../../../api/queries/expenses';

interface Props {
  expense: Expense;
}

const StyledExpenseForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${theme.colors.white};
  border: ${theme.BORDER};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.medium};
  max-width: 560px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${theme.spacing.small};
  width: 100%;
`;

const ExpenseForm: React.FC<Props> = ({ expense }: Props) => {
  const [comment, setComment] = useState<string | undefined>(expense && expense.comment);

  useEffect(() => {
    setComment(expense.comment);
  }, [expense]);

  const onExpenseSubmit = () => {
    if (comment) {
      addComment(expense.id, comment);
    }

    // history.push("/");
  };

  return (
    <StyledExpenseForm>
      <TextArea
        label="Comment"
        name="comment"
        placeholder="Write a comment..."
        value={comment}
        onChange={setComment}
      />
      <FileUpload />
      <Actions>
        <Button onClick={onExpenseSubmit} primary>
          Save
        </Button>
      </Actions>
    </StyledExpenseForm>
  );
};

export default ExpenseForm;
