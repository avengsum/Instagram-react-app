import {FlatList} from 'react-native';
import {Post} from '../../API';
import FeedGridItem from './FeedGridItem';


const FeedGridView = ({
  data,
  ListHeaderComponent,
  refetch,
  loading,
}) => {
  console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => item && <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};

export default FeedGridView;
