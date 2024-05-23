import { sendEmail } from "utils/mail.utils";

export async function POST() {
  const sender = {
    name: "My App",
    address: "nguyenkhoanhathuy@gmail.com",
  };
  const receipients = [
    {
      name: "huyyyyy",
      address: "huynknde170566@fpt.edu.vn",
    },
  ];
  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: "welcome to our website",
      message: "you are welcome to our platform",
    });
    return Response.json({
        accepted:result.accepted,
    })
  } catch (error) {
    return Response.json({message:'loi'},{status:500})
  }
}
