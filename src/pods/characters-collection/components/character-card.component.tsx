import {
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import * as React from 'react';

import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onDetails: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetails, onDelete } = props;
  return (
    <Card onClick={() => onDetails(character.id)}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar aria-label="Character"></Avatar>}
          title={character.name}
          subheader={character.gender}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%', maxHeight: '100px' }}
            />
            <div>
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Status:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.status}
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Origin:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.origin}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
