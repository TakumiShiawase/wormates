import React from 'react';
import styles from './StudioHome.module.scss';
import StudioHomeButtons from '../../../../components/buttons/StudioHomeButtons';
import { studioHomeButtonsPost } from '../../../../services/studio';
import UploadButton from '../../../../components/buttons/UploadButton';

const StudioHome = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main_views}>Welcome to Wormates Studio!</div>
      <div className={styles.views}>What would You like to create?</div>
      <div className={styles.buttons}>
        <div className={styles.blocks}>
          {' '}
          <StudioHomeButtons
            onClick={() => studioHomeButtonsPost('epic_novel')}
            buttonTitle="Epic Novel"
            lengthText="Length: 100000+ words"
            additionalText="Can contain many parts"
          />
          <StudioHomeButtons
            onClick={() => studioHomeButtonsPost('novel')}
            buttonTitle="Novel"
            lengthText="Length: 50000 words to 100000 words"
            additionalText="Can contain many parts"
          />
          <StudioHomeButtons
            onClick={() => studioHomeButtonsPost('short_story_poem')}
            buttonTitle="Short Story/Poem"
            lengthText="Length: Up 50000 words"
            additionalText="Can contain only one part"
          />
        </div>
        <div className={styles.blocks}>
          <StudioHomeButtons
            onClick={() => studioHomeButtonsPost('collection')}
            buttonTitle="Short Story/Poem Collection"
            lengthText="Length: 100000+ words"
            additionalText="Please, use only one part for one story/poem"
          />
          <StudioHomeButtons
            onClick={() => studioHomeButtonsPost('Do not bother me!')}
            buttonTitle="Do not bother me!"
            lengthText="Decide later..."
          />
        </div>
      </div>
      <div className={styles.views}> Or</div>
      <hr className={styles.hr} />
      <div className={styles.views}>
        {' '}
        You can Upload book in the following formats <br />
        &#40;TXT, PDF, DOCX, FB2, EPUB&#41; below:
      </div>
      <UploadButton buttonName={styles.upload} iconName={styles.upload_icon} />
    </div>
  );
};

export default StudioHome;
