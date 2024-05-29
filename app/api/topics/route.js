import connectMongoDB from "libs/mongodb";
import Topic from "models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Lấy dữ liệu từ request body
        const { title, description } = await request.json();

        // Kết nối tới cơ sở dữ liệu MongoDB
        await connectMongoDB();

        // Tạo một topic mới và lưu vào cơ sở dữ liệu
        await Topic.create({ title, description });

        // Trả về phản hồi thành công
        return NextResponse.json({ message: "Topic created" }, { status: 201 });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error creating topic:", error);
        return NextResponse.json({ error: "Unable to create topic" }, { status: 500 });
    }
}

// Chức năng GET để lấy tất cả các topics
export async function GET() {
    try {
        // Kết nối tới cơ sở dữ liệu MongoDB
        await connectMongoDB();

        // Lấy danh sách các topics từ cơ sở dữ liệu
        const topics = await Topic.find();

        // Trả về danh sách topics
        return NextResponse.json({ topics });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error fetching topics:", error);
        return NextResponse.json({ error: "Unable to fetch topics" }, { status: 500 });
    }
}
export async function DELETE(request) {
    try {
        // Lấy ID của topic cần xóa từ request parameters
        const { id } = request.params;

        // Kết nối tới cơ sở dữ liệu MongoDB
        await connectMongoDB();

        // Tìm topic theo ID và xóa nó
        const deletedTopic = await Topic.findByIdAndDelete(id);

        // Kiểm tra nếu không tìm thấy topic
        if (!deletedTopic) {
            return NextResponse.json({ message: "Topic not found" }, { status: 404 });
        }

        // Trả về phản hồi thành công
        return NextResponse.json({ message: "Topic deleted" });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error deleting topic:", error);
        return NextResponse.json({ error: "Unable to delete topic" }, { status: 500 });
    }
}

// Chức năng PUT để cập nhật một topic
export async function PUT(request) {
    try {
        // Lấy ID của topic cần cập nhật từ request parameters
        const { id } = request.params;

        // Lấy dữ liệu cập nhật từ request body
        const { title, description } = await request.json();

        // Kết nối tới cơ sở dữ liệu MongoDB
        await connectMongoDB();

        // Tìm topic theo ID và cập nhật nó
        const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });

        // Kiểm tra nếu không tìm thấy topic
        if (!updatedTopic) {
            return NextResponse.json({ message: "Topic not found" }, { status: 404 });
        }

        // Trả về phản hồi thành công với dữ liệu topic đã cập nhật
        return NextResponse.json({ message: "Topic updated", topic: updatedTopic });
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error updating topic:", error);
        return NextResponse.json({ error: "Unable to update topic" }, { status: 500 });
    }
}