import Button from "@/components/Button";
import FormInput from "@/components/forms/FormInput";
import MyDatePicker from "@/components/forms/MyDatePicker";

const Upload = () => {
  return (
    <div>
      <form action="" className="flex flex-col md:flex-row items-center">
        <div className="w-full p-5">
          <FormInput label={"Document Name"} />

          <FormInput label={"Staff Name"} />
          <FormInput label={"Email Address"} />
          <MyDatePicker />
        </div>
        <div className="w-full p-5">
          <div className="border-2 border-dashed rounded-3xl min-h-[200px]">
            Click to browse or  drag and drop your files
          </div>
        </div>
      </form>
      <div className=" flex gap-8 justify-center">
        <Button variant="outlined">Cancel</Button>
        <Button>Upload</Button>
      </div>
    </div>
  );
};

export default Upload;
