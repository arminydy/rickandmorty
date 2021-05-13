import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { TextField, InputAdornment, IconButton, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem
`;
const StyledTextField = styled(TextField)`
  && {
    min-width: 500px;
    @media only screen and (max-width: 510px) {
      min-width: 300px;
    }
  }
`;

const ENTER_KEY = 13;

const Home: React.FC = (): React.ReactElement<void> => {
  const [keyword, setKeyword] = useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const history  = useHistory();
  const changePage = () => {
    if (keyword) {
      history.push(`/character?name=${keyword}`)
    }
    setIsSnackbarOpen(true);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = e.keyCode || e.which;
    if (code === ENTER_KEY) {
      changePage();
    }
  }

  return (
    <SearchBoxWrapper>
      <StyledTextField
        fullWidth
        label="Search by character"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
        value={keyword}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=> changePage()}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert severity="error" onClose={() => setIsSnackbarOpen(false)}>
          Type in any character you would like to know more about.
        </Alert>
      </Snackbar>
    </SearchBoxWrapper>
  );
}

export default Home;
