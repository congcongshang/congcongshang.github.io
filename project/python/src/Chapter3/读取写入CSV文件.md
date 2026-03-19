# 读取/写入CSV文件

### 读取CSV文件
```python
import csv

def read_csv_to_list(file_path, encoding='utf-8', skip_header=False):
    """
    读取CSV文件并转换为列表（每行作为列表的一个元素，每个元素是字段列表）
    
    参数:
        file_path (str): CSV文件路径
        encoding (str): 文件编码，默认'utf-8'
        skip_header (bool): 是否跳过表头（第一行），默认False
    
    返回:
        list: 包含CSV内容的二维列表（行->字段）
    """
    data = []
    try:
        with open(file_path+'.csv', 'r', encoding=encoding, newline='') as csvfile:
            # 创建CSV读取器（默认以逗号分隔，可通过delimiter参数指定分隔符）
            csv_reader = csv.reader(csvfile)
            
            # 跳过表头（如果需要）
            if skip_header:
                next(csv_reader, None)  # 读取并忽略第一行
            
            # 逐行读取并添加到列表
            for row in csv_reader:
                data.append(row)
        
        return data
    
    except FileNotFoundError:
        print(f"错误：文件 '{file_path}' 不存在")
        return []
    except Exception as e:
        print(f"读取CSV时发生错误：{e}")
        return []
```


### 写入CSV文件
```python
def list_to_csv(data, file_path, encoding='utf-8', write_header=None, delimiter=','):
    """
    将列表数据保存为CSV文件
    
    参数:
        data (list): 要保存的列表（二维列表，如 [[行1列1, 行1列2], [行2列1, ...]]）
        file_path (str): 保存的CSV文件路径
        encoding (str): 文件编码，默认'utf-8'
        write_header (list, 可选): 表头列表（如 ["姓名", "年龄"]），若提供则先写入表头
        delimiter (str): 分隔符，默认逗号','（可改为';'等）
    """
    try:
        with open(file_path, 'w', encoding=encoding, newline='') as csvfile:
            # 创建CSV写入器
            writer = csv.writer(csvfile, delimiter=delimiter)
            
            # 写入表头（如果提供）
            if write_header:
                writer.writerow(write_header)
            
            # 写入数据行
            writer.writerows(data)
        
        print(f"成功将 {len(data)} 行数据保存到 {file_path}")
    
    except Exception as e:
        print(f"保存CSV失败：{e}")

```

### 示例
```python
# 使用示例
if __name__ == "__main__":
    # 示例数据（二维列表）
    data = [
        ["张三", 25, "北京"],
        ["李四", 30, "上海"],
        ["王五", 28, "广州"]
    ]
    
    # 表头
    header = ["姓名", "年龄", "城市"]
    
    # 保存为CSV
    list_to_csv(
        data=data,
        file_path="output.csv",
        write_header=header,
        encoding='utf-8'
    )
```