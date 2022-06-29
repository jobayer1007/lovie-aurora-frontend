// import { Dialog, IconButton } from '@material-ui/core'
// import { Close, DragHandle, Person } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { scorePopup } from '@/atoms/popup';

const ScorePopup = () => {
  const [scoreData, setScoreData] = useRecoilState(scorePopup);
  const [score, setScore] = useState({});

  const { open, type } = scoreData;
  const data = [
    {
      heading: 'Handmade Score (HS)',
      type: 'HS',
      color: 'coolOrange',
      description: `Lovie Aurora hand-picked this product and calculate HS (Handmade Score) based on 34 factors and the product sample sent to us before activating this listing on our website. Stores only get HS badge when the HS is among top 5% of all handmade related products. `,
    },
    {
      heading: 'Original Design Score (OS)',
      type: 'OS',
      color: 'coolDarkerGreen',
      description: `Lovie Aurora hand-picked this product and calculate OS (Original Design Score) based on 34 factors and the product sample sent to us before activating this listing on our website. Stores only get OS badge when the OS is among top 5% of all handmade related products. `,
    },
    {
      heading: 'Custom Score (CS)',
      type: 'CS',
      color: 'scoreGray',
      description: `Lovie Aurora hand-picked this product and calculate CS (Custom Score) based on 36 factors and the product sample sent to us before activating this listing on our website. Stores only get CS badge when the CS is among top 1%-5% of all custom related products. `,
    },
    {
      heading: 'Merchant Score (MS)',
      type: 'MS',
      color: '[#222222]',
      description: `Lovie Aurora hand-picked this store and calculate MS (Merchant Score) based on 16 factors and major product samples sent to us before approving its selling application.`,
    },
    {
      heading: 'Quality Score (QS)',
      type: 'QS',
      color: '[#1B6F2D]',
      description: `Lovie Aurora hand-picked this product and
calculate QS (Quality Score) based on 33   factors and the product sample sent to us before activating this listing on our website. QS will be displayed on every handmade product page to guide customer purchase.`,
    },
    {
      heading: 'Handmade',
      type: 'handmade',
      color: 'coolOrange',
      description: `Lovie Aurora hand-picked this product and
calculate HS (Handmade Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get Handmade badge when the HS is among top 1%-5% of all handmade related products.`,
    },
    {
      heading: 'Original',
      color: 'coolDarkerGreen',
      type: 'original',
      description: `Lovie Aurora hand-picked this product and
calculate OS (Original Design Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get OS badge when the OS is among top 1%-5% of all original design related products. `,
    },
    {
      heading: 'Custom',
      color: 'scoreGray',
      type: 'custom',
      description: `Lovie Aurora hand-picked this product and
calculate CS (Custom Score) based on 33 factors and the product sample sent to us before activating this listing on our website. Stores only get CS badge when the CS is among top 1%-5% of all custom related products. `,
    },
    {
      heading: 'Flash Sale',
      type: 'flashSale',
      description: `Lovie Aurora picks our products for a certain period of promotion. Normally, the promotion (Flash Sale) would last for 24-48 hours. `,
    },
    {
      heading: 'Only Sell at LA',
      type: 'onlyForLA',
      description: `Lovie Aurora has solo contract with many stores that the store promises to sell their items only at Lovie Aurora.`,
    },
  ];

  useEffect(() => {
    setScore(data.find((dataItem) => dataItem.type === type));
  }, [type]);

  const handleClose = () => {
    setScoreData({ ...scoreData, open: false });
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        {score != undefined ? (
          <div className='flex relative flex-col p-6 max-w-[500px]'>
            <div className='flex w-full items-center justify-space'>
              <h1
                className={`text-${score.color} flex-1 text-xl lg:text-[24px] font-semibold `}
              >
                {score.heading}{' '}
              </h1>
              <div className='absolute top-0 right-0'>
                <IconButton>
                  <Close onClick={handleClose} />
                </IconButton>
              </div>
            </div>
            <p className='mt-4 text-[12px] font-md text-coolBlack'>
              {score.description}
            </p>
          </div>
        ) : (
          ''
        )}
      </Dialog>
    </>
  );
};

export default ScorePopup;
