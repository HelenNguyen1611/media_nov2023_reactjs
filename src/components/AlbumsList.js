import {useFetchAlbumsQuery} from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const {data, error, isLoading} = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);

  let content;
  if(isLoading){
    content = <Skeleton times={3}/>
  }else if(error){
    content = <div>Error loading albums.</div>
  }else{
    content = data.map(album => {
      const header = <div>{album.title}</div>
      return <ExpandablePanel key={album.id} header={header}>
          List of photo in the album.
      </ExpandablePanel>
    })
  }

  return (
      <div>
        <div className="mb-2"><b> Abums for {user.name}</b></div>
        <div>{content}</div>
      </div>
  );
}

export default AlbumsList;
